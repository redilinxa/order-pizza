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

Route::middleware('auth:api')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
});
Route::get('/cart', 'CartController@index');
Route::post('/cart/{productId}/add', 'CartController@addToCart');
Route::put('/cart/{productId}/remove', 'CartController@removeFromCart');
Route::get('/products', 'ProductController@index');
