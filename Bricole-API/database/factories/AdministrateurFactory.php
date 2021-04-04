<?php

namespace Database\Factories;

use App\Models\Administrateur;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
class AdministrateurFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Administrateur::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'pseudo'=>"nom.prenom.id",
            'nom'=>Str::random(10),
            'prenom'=>Str::random(10),
            'password'=>'$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',
            'email' =>$this->faker->unique()->safeEmail,
            'telephone' => "0600000000",
            'photo' => $this->faker->image('public/storage',640,480, null, false),
            'ville' => Str::random(10),
            'soldeGlobal' => '100',
            'soldeActuel' => '100',

        ];
    }
}
