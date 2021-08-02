<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProfessionController extends Controller
{
    public function getProject(int $id)
    {
        $projects = DB::table('projets')
                    ->where('categorie_id',$id)
                    ->get();

        return response()->json($projects);
    }
}
