<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name'        => $this->faker->text(12),
            'price'       => $this->faker->randomFloat(3, 10, 100),
            'image'       => "{$this->faker->randomElement([1, 2, 3])}.jpeg",
            'description' => $this->faker->text(300),
            'created_by'  => 1,
        ];
    }
}
