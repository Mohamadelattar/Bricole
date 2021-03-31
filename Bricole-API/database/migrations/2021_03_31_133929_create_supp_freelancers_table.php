<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSuppFreelancersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('supp_freelancers', function (Blueprint $table) {
            
            $table->bigIncrements('id');
            $table->string('message');
            $table->foreignId('freelancer_id')->constrained('freelancers')->onUpdate('cascade')->onDelete('cascade');
            $table->foreignId('administrateur_id')->constrained('administrateurs')->onUpdate('cascade')->onDelete('cascade');
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
        Schema::dropIfExists('supp_freelancers');
    }
}
