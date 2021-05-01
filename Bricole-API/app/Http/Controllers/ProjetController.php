<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProjetClientResource;
use Illuminate\Http\Request;
use App\Models\Projet;
use App\Http\Resources\ProjetResource;
use Illuminate\Support\Facades\DB;


class ProjetController extends Controller
{
     

    
    public function store(Request $request)
    {
         

        $projet = Projet::create($request->all());

        return (new ProjetResource($projet))
                ->response()
                ->setStatusCode(201);
    }

    public function index(int $id)
    {
        $projets =  DB::table('projets')->where('client_id', $id)->get();

        //$projets = new ProjetClientResource($projets);

        return response()->json($projets);

    }

}
