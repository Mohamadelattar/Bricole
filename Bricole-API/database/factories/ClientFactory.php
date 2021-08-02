<?php

namespace Database\Factories;

use App\Models\Client;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
class ClientFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Client::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'pseudo'=>Str::random(5),
            'nom'=>$this->faker->firstName,
            'prenom'=>$this->faker->lastName,
            'password'=>'$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',
            'email' =>$this->faker->unique()->safeEmail,
            'telephone' => "0600000000",
            'filename' => "https://img.icons8.com/bubbles/2x/4a90e2/user-male.png",
            'ville' => "Agadir",
            'soldeGlobal' => '100',
            'soldeActuel' => '100',
        ];
    }
}
