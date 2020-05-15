<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('products')->insert([
            [
                'name' => 'Yumi special',
                'description' => 'Best pizza ever',
                'price' => 10.00,
                'attributes' => json_encode([
                    'ingredients' => 'cheese, ham, tomato, peperoni, all you wana',
                    'doe' => 'thick'
                ]),
            ],
            [
                'name' => 'Pizza Margerita',
                'description' => 'Pizza Margerita',
                'price' => 5.00,
                'attributes' => json_encode([
                    'ingredients' => 'cheese, ham, tomato, peperoni, all you wana',
                    'doe' => 'thick'
                ]),
            ],
            [
                'name' => 'Pizza Marinara',
                'description' => 'Pizza Margerita',
                'price' => 4.00,
                'attributes' => json_encode([
                    'ingredients' => 'tomato, garlic, pepper, olive oil',
                    'doe' => 'thin'
                ]),
            ],
            [
                'name' => 'Pizza 4 seasons',
                'description' => 'Pizza 4 seasons',
                'price' => 7.00,
                'attributes' => json_encode([
                    'ingredients' => 'cheese, ham, tomato, tuna',
                    'doe' => 'thick'
                ]),
            ],
            [
                'name' => 'Pizza 4 cheese',
                'description' => 'Pizza 4 cheese',
                'price' => 8.00,
                'attributes' => json_encode([
                    'ingredients' => 'cheese, cheese, and only cheese',
                    'doe' => 'thin'
                ]),
            ]
        ]);
    }
}
