<?php

namespace App\Http\Controllers;

use App\Http\Resources\CommentaireResource;
use App\Http\Resources\AuthResource;
use App\Models\Commentaire;
use App\Models\Freelancer;
use Illuminate\Http\Request;
 

class CommentaireController extends Controller
{
    public function store(Request $request)
    {

        $commentaire = Commentaire::create($request->all());
        

        return (new CommentaireResource($commentaire))
                ->response()
                ->setStatusCode(201);
    }

    public function commentaires($id)
    {
        $commentaires = Commentaire::where('projet_id',$id)->get();
        $freelancers= collect();

        foreach($commentaires as $commentaire)
        {   
            $freelancer = Freelancer::where('id',$commentaire->freelancer_id)->first();
             
            $freelancer = new AuthResource($freelancer);
            $freelancers->add($freelancer);

        }

        return response()->json([$commentaires , $freelancers]);
    }
}
