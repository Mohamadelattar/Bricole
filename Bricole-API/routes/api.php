<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\FreelancerController;
use App\Http\Controllers\ProjetController;
use App\Http\Controllers\PortfolioController;
use App\Http\Controllers\CategorieController;
use App\Http\Controllers\GalleryProjetController;
use App\Http\Controllers\GalleryPortfolioController;


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

Route::get(
    '/projet/{id}',
    [ProjetController::class, 'projet']
);

Route::get(
    '/projets',
    [ProjetController::class, 'projets']
);

Route::get('/projetsConfirme', [ProjetController::class,'projetsConfirmee']);

Route::get('/projetsRefus', [ProjetController::class,'projetsRefus']);


Route::get(
    '/gallery/{id}',
    [GalleryProjetController::class, 'gallery']
);
Route::post('/gallery', [GalleryProjetController::class,'store']);

Route::post('/galleryPortfolio', [GalleryPortfolioController::class,'storeGallery']);

Route::post('/login',[AuthController::class,'login']);

Route::post('/freelancer/login',[AuthController::class,'loginFreelancer']);

Route::post('/portfolio', [PortfolioController::class,'store']);

Route::post('/projet', [ProjetController::class,'store']);

Route::get('/projet-edit/{id}',[ProjetController::class,'approuver']);

Route::get('/projet-refus/{id}',[ProjetController::class,'refus']);




