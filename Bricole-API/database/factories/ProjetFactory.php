<?php

namespace Database\Factories;

use App\Models\Categorie;
use App\Models\Client;
use App\Models\Projet;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
class ProjetFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Projet::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'titre' => Str::random(50),
             
            'description' =>Str::random(200),
            'budget' => '100',
            'statut' => 'suspend',
            'dateDebut' =>now(),
            'dateFin' =>now(),
            'client_id' => Client::all()->random()->id,
            'categorie_id' => Categorie::all()->random()->id,
        ];
    }
}
