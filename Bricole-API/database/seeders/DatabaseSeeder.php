<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
         \App\Models\User::factory(10)->create();

         \App\Models\Administrateur::factory(1)->create();

         \App\Models\Categorie::factory(10)->create();

         \App\Models\Client::factory(10)->create();

         \App\Models\Profession::factory(10)->create();

         \App\Models\Freelancer::factory(10)->create();

         \App\Models\Projet::factory(10)->create();

         \App\Models\Portfolio::factory(10)->create();

         \App\Models\Message::factory(10)->create();
         
         //\App\Models\Feedback::factory(5)->create();

         \App\Models\Gallery::factory(5)->create();
    }
}
