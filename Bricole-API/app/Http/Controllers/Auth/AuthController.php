<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\AuthRequest;
use App\Models\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use App\Http\Resources\AuthResource;
use App\Models\Freelancer;

class AuthController extends Controller
{
    public function login(Request $request){
    $credentials = $request->all();

    $client = Client::where('email', $request->email)->first();

    //session(['client' => $client]);
    if(!$client || !Hash::check($request->password, $client->password)){
    
    return response()->json('Invalid credentials');
    }

    $client= new AuthResource($client);
    return response()->json([$client->createToken('auth')->plainTextToken,$client]);

}

public function loginFreelancer(Request $request){
    $credentials = $request->all();

    $freelancer = Freelancer::where('email', $request->email)->first();

    //session(['client' => $client]);
    if(!$freelancer || !Hash::check($request->password, $freelancer->password)){
    
    return response()->json('Invalid credentials');
    }

    $freelancer= new AuthResource($freelancer);
    return response()->json([$freelancer->createToken('auth')->plainTextToken,$freelancer]);

}
}