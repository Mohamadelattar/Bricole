<?php

namespace App\Http\Controllers;

use App\Models\Portfolio;
use Illuminate\Http\Request;
use App\Http\Resources\PortfolioResource;

class PortfolioController extends Controller
{
    public function store(Request $request)
    {

        $projet = Portfolio::create($request->all());

        return (new PortfolioResource($projet))
                ->response()
                ->setStatusCode(201);
    }

    public function portfolioFreelancer(int $id)
    {
        
        $portfolios = Portfolio::where('freelancer_id',$id)->get();
            return response()->json($portfolios);
    }
}
