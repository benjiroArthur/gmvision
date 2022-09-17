<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateNurseRegistrationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('nurse_registrations', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('nurse_registration_payment_id');
            $table->string('name');
            $table->string('email');
            $table->string('registration_code');
            $table->string('phone_number');
            $table->date('dob')->nullable();
            $table->string('website')->nullable();
            $table->string('residential_address')->nullable();
            $table->string('nationality')->nullable();
            $table->string('profession')->nullable();
            $table->string('emergency_contact')->nullable();
            $table->string('name_of_relative')->nullable();
            $table->text('postal_address')->nullable();
            $table->text('experience')->nullable();
            $table->text('organizations_worked_with')->nullable();
            $table->longText('travel_experience')->nullable();
            $table->string('received_by')->nullable();
            $table->string('confirmed_by')->nullable();
            $table->string('status')->default('processing');
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
        Schema::dropIfExists('nurse_registrations');
    }
}
