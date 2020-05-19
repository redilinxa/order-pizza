<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Auth::routes();

Route::middleware('auth')->group(function (){
    Route::get('/', 'HomeController@index')->name('home');
    Route::get('/home', function (){
        return response()->redirectTo('/');
    });
    /*Return product*/
    Route::get('/api/products', 'ProductController@index');

    /*Cart route*/
    Route::get('/cart', 'CartController@index');
    Route::post('/cart/{productId}/add', 'CartController@addToCart');
    Route::put('/cart/{productId}/{qty}/edit', 'CartController@editQty');
    Route::delete('/cart/{productId}/remove', 'CartController@removeFromCart');

    /*Order*/
    Route::get('/orders', 'OrderController@index');
    Route::post('/orders/create', 'OrderController@create');

});


