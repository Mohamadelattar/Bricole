<?php

namespace App\Http\Controllers;

use Illuminate\Http\File;
use App\Models\GalleryProjet;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Models\Projet;
use Illuminate\Support\Facades\DB;

 

class GalleryProjetController extends Controller
{
    public function store(Request $request)

    {   $id = DB::table('projets')->latest('id')->first()->{'id'};

        

        if ($request->hasFile('image'))
      {     
            $file      = $request->file('image');    
            $filename  = $file->getClientOriginalName();
            $extension = $file->getClientOriginalExtension();
            $picture   = date('His').'-'.$filename;
            //move image to public/img folder
            //$file->move(public_path('images/client/projects'), $picture);
            
            
            $file->storeAs($picture,"","google");
            $galleryProjet = new GalleryProjet();
            $galleryProjet->filename =  $picture;
            $galleryProjet->projet_id= $id;
            $galleryProjet->save();
            return response()->json(["message" => "Image Uploaded Succesfully"]);
      } 
      else
      {
            return response()->json(["message" => "Select image first."]);
      }
    }

    public function gallery(int $id)
    {
        $galleries =  DB::table('gallery_projets')->where('projet_id', $id)->get('filename');
        return response()->json($galleries);

    }
}
