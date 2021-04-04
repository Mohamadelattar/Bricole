<?php

namespace Database\Factories;

use App\Models\Freelancer;
use App\Models\Profession;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
class FreelancerFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Freelancer::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'pseudo'=>Str::random(10),
            'nom'=>Str::random(10),
            'prenom'=>Str::random(10),
            'password'=>'$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',
            'email' =>$this->faker->unique()->safeEmail,
            'telephone' => "0600000000",
            'photo' => $this->faker->image('public/storage',640,480, null, false),
            'ville' => Str::random(10),
            'soldeGlobal' => '100',
            'soldeActuel' => '100',
            'profession_id' => Profession::all()->random()->id,
        ];
    }
}
