<?php

namespace Database\Factories;

use App\Models\Application;
use App\Models\Freelancer;
use App\Models\Projet;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class ApplicationFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Application::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'message' => Str::random(15),
            'dateDebut' =>now(),
            'etat' => 'suspend',
            'freelancer_id' => Freelancer::all()->random()->id,
            'projet_id' => Projet::all()->random()->id,

        ];
    }
}
