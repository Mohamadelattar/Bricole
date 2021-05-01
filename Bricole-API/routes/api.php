<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\FreelancerController;
use App\Http\Controllers\ProjetController;
use App\Http\Controllers\CategorieController;



/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::group(['middleware' => 'auth:client'], function() {
   
});
 

Route::get(
    '/freelancers',
    [FreelancerController::class, 'index']
);

Route::get(
    '/categorie',
    [CategorieController::class, 'index']
);

Route::get(
    '/projects/client/{id}',
    [ProjetController::class, 'index']
);

Route::post('/projet', [ProjetController::class,'store']);
Route::post('/login',[AuthController::class,'login']);



 