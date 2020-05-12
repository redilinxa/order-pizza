<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/order', function () {
    return [
        [
            'id' => 1,
            'img' => 'pizza.jpg',
            'name' => 'Pizza Capricioza',
            'price' => 67.99,
            'quantity' => 4,
            'attributes' => array()
        ],
        [
            'id' => 2,
            'img' => 'pizza.jpg',
            'name' => 'Pizza Marinara',
            'price' => 69.25,
            'quantity' => 4,
            'attributes' => [
                'size' => 'L',
                'color' => 'blue'
            ]
        ]
        ,
        [
            'id' => 3,
            'img' => 'pizza.jpg',
            'name' => 'Pizza 4 Cheese',
            'price' => 69.25,
            'quantity' => 4,
            'attributes' => [
                'size' => 'L',
                'color' => 'blue'
            ]
        ]
        ,
        [
            'id' => 4,
            'img' => 'pizza.jpg',
            'name' => 'Pizza 4 Seasons',
            'price' => 69.25,
            'quantity' => 4,
            'attributes' => [
                'size' => 'L',
                'color' => 'blue'
            ]
        ]
        ,
        [
            'id' => 5,
            'img' => 'pizza.jpg',
            'name' => 'Pizza O Sole mio',
            'price' => 69.25,
            'quantity' => 4,
            'attributes' => [
                'size' => 'L',
                'color' => 'blue'
            ]
        ]
    ];
});
