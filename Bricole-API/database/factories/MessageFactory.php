<?php

namespace Database\Factories;

use App\Models\Client;
use App\Models\Freelancer;
use App\Models\Message;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class MessageFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Message::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'message' => Str::random(20),
            'freelancer_id' => Freelancer::all()->random()->id,
            'client_id' => Client::all()->random()->id,
        ];
    }
}
