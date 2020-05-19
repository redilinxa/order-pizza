<?php


namespace App\Service;

use App\Order;
use App\User;
/**
 * Class OrderService
 * Handles the creation of the order request coming from the controller.
 * @package App\Service
 */
class OrderService
{
    /**
     * @param User $user
     * @return Order $acount
     */
    public function addOrder(User $user, $data){
        $order = Order::updateOrCreate([
            'user_id' => $user->id,
            'total' => $data['total'],
            'notes' => $data['shippingAddress']
        ]);

        $order->details()->createMany(json_decode($data['details'],true));

        return $order;
    }
}
