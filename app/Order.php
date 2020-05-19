<?php


namespace App;


use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable = ['user_id', 'total', 'notes'];

    public function user(){
        return $this->belongsTo('App\User');
    }

    public function details(){
        return $this->hasMany('App\OrderDetail');
    }
}
