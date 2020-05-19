<?php


namespace App\Http\Controllers;


use App\Http\Requests\OrderRequest;
use App\Service\OrderService;
use App\Order;
class OrderController
{
    /**
     * @var OrderService
     */
    private $orderService;

    /**
     * TransactionsController constructor.
     * @param OrderService $orderService
     */
    public function __construct(OrderService $orderService)
    {
        $this->orderService = $orderService;
    }

    /**
     * Simple route to display all orders
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(){
        $orders = Order::all();
        return response()->json($orders);
    }

    /**
     * The route responsible for creating the order
     * @param OrderRequest $request. Handles all order validations
     * @return \Illuminate\Http\JsonResponse
     */
    public function create(OrderRequest $request){
        $order = $this->orderService->addOrder($request->user(),$request->all());
        return response()->json($order);
    }

}
