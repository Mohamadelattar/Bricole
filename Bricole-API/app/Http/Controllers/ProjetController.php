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

    public function projet(int $id)
    {
        $projet =  DB::table('projets')->where('id', $id)->first();

        //$projet = new ProjetClientResource($projets);

        return response()->json($projet);

    }

    public function projets()
    {
        $search = "Not approuved";
            $projects =  Projet::where('statut', $search)->get();
            return response()->json($projects);
    }

    public function projetsConfirmee()
    {
        $search = "Approuver";
            $projects =  Projet::where('statut', $search)->get();
            return response()->json($projects);
    }

    
    public function approuver(int $id)
    {
        $projet =  DB::table('projets')->where('id', $id)->update(['statut' => "Approuver"]);

        return response()->json("Succes");

    }

    public function projetsRefus()
    {
        $search = "Refus";
            $projects =  Projet::where('statut', $search)->get();
            return response()->json($projects);
    }
    
    public function refus(int $id)
    {
        $projet =  DB::table('projets')->where('id', $id)->update(['statut' => "Refus"]);

        return response()->json("Succes");

    }

}
