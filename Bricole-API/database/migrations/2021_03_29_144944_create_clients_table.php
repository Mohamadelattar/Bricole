<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateClientsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('clients', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('pseudo',15);
            $table->string('nom',15);
            $table->string('prenom',15);
            $table->string('password');
            $table->string('email');
            $table->integer('telephone');
            $table->string('filename');
            $table->string('ville');
            $table->integer('soldeGlobal');
            $table->integer('soldeActuel');
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
        Schema::dropIfExists('clients');
    }
}
