<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('projects')->insert([
            [
                'name' => 'Benjamin Arthur',
                'email' => 'majorcaios@gmail.com',
                'user_type' => 'admin',
                'email_verified_at' => now(),
                'password' => Hash::make('Major@gmvision'),
                'created_at' => now(),
                'updated_at' => now()
            ]
        ]);
    }
}
