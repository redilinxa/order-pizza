<?php


namespace App\Http\Controllers;


use App\Product;

class ProductController extends Controller
{
    public function index(){
        return response()->json(Product::all());
    }
}
