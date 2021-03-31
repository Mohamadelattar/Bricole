<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFreelancersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('freelancers', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('pseudo',15);
            $table->string('nom',15);
            $table->string('prenom',15);
            $table->string('password');
            $table->string('email');
            $table->integer('telephone');
            $table->binary('photo');
            $table->string('ville');
            $table->integer('soldeGlobal');
            $table->integer('soldeActuel');
            /* Lier freelancer avec Profession */
            $table->foreignId('profession_id')->constrained('professions')->onUpdate('cascade')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('freelancers');
    }
}
