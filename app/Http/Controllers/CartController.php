<?php


namespace App\Http\Controllers;

use App\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CartController extends Controller
{
    public function index(Request $request){

        $userId = $request->user()->id;
        $items = [];
        \Cart::session($userId)->getContent()->each(function($item) use (&$items)
        {
            $items[] = [
                'id'=>$item->id,
                'name' => $item->name,
                'description' => $item->associatedModel->description,
                'image_url' => $item->associatedModel->image_url,
                'price' => number_format($item->price,2),
                'quantity' => $item->quantity,
                'attributes' => $item->associatedModel->attributes,
                'updated_at' => $item->associatedModel->updated_at,
                'created_at' => $item->associatedModel->created_at
            ];
        });

        return response()->json(['products'=>$items,'total'=>number_format(number_format(\Cart::session($userId)->getTotal(),2),2)]);
    }

    public function addToCart(Request $request, $productId){
        $userId = $request->user()->id;
        $product = Product::find($productId);
        // add the product to cart
        \Cart::session($userId)->add(array(
            'id' => $product->id,
            'name' => $product->name,
            'price' => $product->price,
            'description' => $product->description,
            'quantity' => 1,
            'attributes' => array(),
            'associatedModel' => $product
        ));
        return response()->json(['product'=>$product,'total'=>number_format(\Cart::session($userId)->getTotal(),2)]);
    }

    public function editQty(Request $request, $productId, $qty){
        $userId = $request->user()->id;
        $product = Product::find($productId);

        \Cart::session($userId)->update($productId,[
            'quantity' => [
                'relative' => false,
                'value' => $qty
            ]
        ]);
        return response()->json(['product'=>$product,'total'=>number_format(\Cart::session($userId)->getTotal(),2)]);
    }

    public function removeFromCart(Request $request, $productId){
        $userId = $request->user()->id;
        $product = Product::find($productId);

        \Cart::session($userId)->remove($productId);
        return response()->json(['product'=>$product,'total'=>number_format(\Cart::session($userId)->getTotal(),2)]);
    }
}
