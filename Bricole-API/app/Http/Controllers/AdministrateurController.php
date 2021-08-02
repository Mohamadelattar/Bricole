<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Freelancer;
use App\Models\Client;

class AdministrateurController extends Controller
{
    public function storeFreelancer(Request $request)
    {   
         
            $freelancer = Freelancer::create($request->all());

            return (new RegisterResource($freelancer))
                    ->response()
                    ->setStatusCode(201);
         
    }

    public function storeClient(Request $request)
    {   

            $client = Client::create($request->all());

            return (new RegisterResource($client))
                    ->response()
                    ->setStatusCode(201);
        
    }
}
