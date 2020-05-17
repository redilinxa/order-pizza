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
                'image_url' => 'yummi.jpg',
                'price' => 10.00,
                'attributes' => json_encode([
                    'ingredients' => 'cheese, ham, tomato, peperoni, all you wana',
                    'doe' => 'thick'
                ]),
            ],
            [
                'name' => 'Pizza Margerita',
                'description' => 'Pizza Margerita',
                'image_url' => 'margerita.jpg',
                'price' => 5.00,
                'attributes' => json_encode([
                    'ingredients' => 'cheese, ham, tomato, peperoni, all you wana',
                    'doe' => 'thick'
                ]),
            ],
            [
                'name' => 'Pizza Marinara',
                'description' => 'Pizza Marinara',
                'image_url' => 'marinara.jpg',
                'price' => 4.00,
                'attributes' => json_encode([
                    'ingredients' => 'tomato, garlic, pepper, olive oil',
                    'doe' => 'thin'
                ]),
            ],
            [
                'name' => 'Pizza 4 seasons',
                'description' => 'Pizza 4 seasons',
                'image_url' => '4-seasons.jpg',
                'price' => 7.00,
                'attributes' => json_encode([
                    'ingredients' => 'cheese, ham, tomato, tuna',
                    'doe' => 'thick'
                ]),
            ],
            [
                'name' => 'Pizza 4 cheese',
                'description' => 'Pizza 4 cheese',
                'image_url' => '4-cheese.jpg',
                'price' => 8.00,
                'attributes' => json_encode([
                    'ingredients' => 'cheese, cheese, and only cheese',
                    'doe' => 'thin'
                ]),
            ],
            [
                'name' => 'Pizza Pepperoni',
                'description' => 'Pizza Pepperoni',
                'image_url' => 'pepperoni.jpg',
                'price' => 6.00,
                'attributes' => json_encode([
                    'ingredients' => 'peperoni, cheese, tomato souce',
                    'doe' => 'thin'
                ]),
            ]
        ]);
    }
}
