<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\Models\Client;

class ClientController extends Controller
{
    public function client(int $id)
    {
        $client =  DB::table('clients')->where('id', $id)->first();

        //$projet = new ProjetClientResource($projets);

        return response()->json($client);

    }

    public function editClient(Request $request){
        $client = Client::updateOrCreate($request->all());
        return response()->setStatusCode(201);
    }

    public function clients()
    {
        $clients =  DB::table('clients')
                        ->take(5)
                        ->get();

        //$projet = new ProjetClientResource($projets);

        return response()->json($clients);

    }



}
