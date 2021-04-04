<?php

namespace Database\Factories;

use App\Models\Gallery;
use App\Models\Portfolio;
use Illuminate\Database\Eloquent\Factories\Factory;

class GalleryFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Gallery::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'photo' => $this->faker->image('public/storage',640,480, null, false),
            'portfolio_id' => Portfolio::all()->random()->id,
        ];
    }
}
