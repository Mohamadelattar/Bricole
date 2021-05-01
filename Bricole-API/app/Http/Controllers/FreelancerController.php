<?php

namespace App\Http\Controllers;

use App\Models\Freelancer;
use Illuminate\Http\Request;

class FreelancerController extends Controller
{
    //

    public function index()
    {
        return Freelancer::all();
    }


}
