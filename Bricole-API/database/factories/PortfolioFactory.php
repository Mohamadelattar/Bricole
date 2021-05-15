<?php

namespace Database\Factories;

use App\Models\Freelancer;
use App\Models\Portfolio;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
class PortfolioFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Portfolio::class;

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
            'freelancer_id' => Freelancer::all()->random()->id,
        ];
    }
}
