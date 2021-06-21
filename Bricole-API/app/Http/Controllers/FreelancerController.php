<?php

namespace App\Http\Controllers;

use App\Models\Freelancer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class FreelancerController extends Controller
{
    //

    public function index()
    {
        return Freelancer::all();
    }

    public function freelancer(int $id)
    {
        $freelancer =  DB::table('freelancers')->where('id', $id)->first();

        //$projet = new ProjetClientResource($projets);

        return response()->json($freelancer);

    }

}
