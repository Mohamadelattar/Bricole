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
use App\Http\Controllers\CommentaireController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\ProfessionController;
use App\Http\Controllers\AdministrateurController;

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
    '/freelancer/{id}',
    [FreelancerController::class, 'freelancer']
);

Route::get(
    '/client/{id}',
    [ClientController::class, 'client']
);

Route::get(
    '/clients',
    [ClientController::class, 'clients']
);

Route::post(
    '/editClient',
    [ClientController::class, 'editClient']
);


Route::get(
    '/projets',
    [ProjetController::class, 'projets']
);

Route::get(
    '/projects',
    [ProjetController::class, 'projects']
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

Route::post('/loginAdmin',[AuthController::class,'loginAdmin']);

Route::post('/portfolio', [PortfolioController::class,'store']);

Route::post('/projet', [ProjetController::class,'store']);

Route::get('/freelancers', [FreelancerController::class,'freelancers']);

Route::post('/commentaire', [CommentaireController::class,'store']);
 
Route::get('/commentaires/{id}', [CommentaireController::class,'commentaires']);

Route::get('/commentaire/{id}', [CommentaireController::class,'commentaire']);

Route::get('/projet-edit/{id}',[ProjetController::class,'approuver']);

Route::get('/projet-refus/{id}',[ProjetController::class,'refus']);

Route::get('/projet-client/{id}',[ProjetController::class,'projetsClient']);


Route::get('/projet-clientRefus/{id}',[ProjetController::class,'projetsRefusParUtilisateur']);

Route::get('/projet-clientConfirmes/{id}',[ProjetController::class,'projetsConfirmeeParUtilisateur']);

Route::get('/projet-clientTerminer/{id}',[ProjetController::class,'projetsTerminerParUtilisateur']);

Route::post('/messagesUsers',[MessageController::class,'getUsersMessages']);

Route::post('/messagesFirst',[MessageController::class,'getMessagesFirst']);

Route::get('/conversation/{idClient}/{idFreelancer}',[MessageController::class,'getClientConversation']);

Route::post('/saveMessage', [MessageController::class,'store']);

Route::get('/profession/{id}',[ProfessionController::class,'getProject']);

Route::post('/registerClient',[AdministrateurController::class,'storeClient']);

Route::post('/registerFreelancer',[AdministrateurController::class,'storeFreelancer']);

Route::get('/portfolios/{id}',[PortfolioController::class,'portfolioFreelancer']);
