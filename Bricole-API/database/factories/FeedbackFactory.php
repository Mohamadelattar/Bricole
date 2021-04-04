<?php

namespace Database\Factories;

use App\Models\Client;
use App\Models\Feedback;
use App\Models\Freelancer;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class FeedbackFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Feedback::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'note' =>$this->faker->randomElements($array=array(1,2,3,4,5)),
            'avis' => Str::random(200),
            'freelancer_id' =>Freelancer::all()->random()->id,
            'client_id' =>Client::all()->random()->id,

        ];
    }
}
