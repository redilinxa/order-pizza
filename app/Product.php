<?php


namespace App;


use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = ['id', 'name', 'image_url', 'description', 'price', 'attributes'];
}
