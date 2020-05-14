<?php


namespace App;


use Illuminate\Database\Eloquent\Model;

class OrderDetail extends Model
{
    protected $fillable = ['id', 'order_id', 'product_id', 'quantity'];

    public function order(){
        $this->belongsTo('App\Order');
    }

    public function product(){
        $this->belongsTo('App\Product');
    }
}
