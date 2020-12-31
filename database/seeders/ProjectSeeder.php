<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProjectSeeder extends Seeder
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
                'name' => 'General Donation',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'School Projects',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'Face Of Mother Ghana',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'Face Of Golden Mothers',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'Women Empowerment',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'Water Project',
                'created_at' => now(),
                'updated_at' => now()
            ]
        ]);
    }
}
