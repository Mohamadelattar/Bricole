<?php

namespace App\Http\Controllers;

use App\Models\GalleryPortfolio;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;

class GalleryPortfolioController extends Controller
{
    //
    public function storeGallery(Request $request)

    {   $id = DB::table('portfolios')->latest('id')->first()->{'id'};

        

        if ($request->hasFile('image'))
      {     
            $file      = $request->file('image');    
            $filename  = $file->getClientOriginalName();
            $extension = $file->getClientOriginalExtension();
            $picture   = date('His').'-'.$filename;
            //move image to public/img folder
            //$file->move(public_path('images/client/projects'), $picture);
            
            
            $file->storeAs($picture,"","google");
            $galleryPortfolio = new GalleryPortfolio();
           
           
            $name = Storage::disk("google")->url($picture);
            $galleryPortfolio->filename =  $name;
            $galleryPortfolio->portfolio_id= $id;
            $galleryPortfolio->save();
            return response()->json(["message" => "Image Uploaded Succesfully"]);
      } 
      else
      {
            return response()->json(["message" => "Select image first."]);
      }
    }
}
