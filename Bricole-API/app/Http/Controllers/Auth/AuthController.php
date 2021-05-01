<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\AuthRequest;
use App\Models\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use App\Http\Resources\AuthResource;

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
}
