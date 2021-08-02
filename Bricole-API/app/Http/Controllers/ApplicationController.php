<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ApplicationController extends Controller
{
    public function store(Request $request)
    {

        $application = Application::create($request->all());
        

        return (new CommentaireResource($commentaire))
                ->response()
                ->setStatusCode(201);
    }
}
