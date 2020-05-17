<?php


namespace App\Http\Controllers;

use App\Product;
use Illuminate\Support\Facades\Auth;

class CartController extends Controller
{
    public function index(){
        return response()->json(['product'=>\Cart::getContent(),'total'=>\Cart::getTotal()]);
    }

    public function addToCart($productId){
        $product = Product::find($productId);
        // add the product to cart
        \Cart::session(Auth::id())->add(array(
            'id' => $product->id,
            'name' => $product->name,
            'price' => $product->price,
            'quantity' => 4,
            'attributes' => array(),
            'associatedModel' => $product
        ));
        return response()->json(['product'=>$product,'total'=>\Cart::getTotal()]);
    }

    public function removeCart($productId){
        $product = Product::find($productId); // assuming you have a Product model with id, name, description & price

        \Cart::session(Auth::id())->remove($productId);
        return response()->json(['product'=>$product,'total'=>\Cart::getTotal()]);
    }
}
