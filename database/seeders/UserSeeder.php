<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
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
        $data = array(
            array(
                'name'     => "Super Admin",
                'email'    => "admin@gmail.com",
                'password' => Hash::make(12345678),
                'is_admin'=>1,
                "created_at" => "2022-04-01 20:36:13",
                "updated_at" => "2022-04-01 20:36:13",
            ),
            array(
                'name'     => "User",
                'email'    => "user@gmail.com",
                'password' => Hash::make(12345678),
                'is_admin'=>0,
                "created_at" => "2022-04-01 20:36:13",
                "updated_at" => "2022-04-01 20:36:13",
            ),

        );
        User::query()->insert($data);
    }
}
