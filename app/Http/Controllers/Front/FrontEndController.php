<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProductResource;
use App\service\ProductService;
use Illuminate\Http\Request;

class FrontEndController extends Controller
{
    protected $productService;

    public function __construct(ProductService $productService)
    {
        $this->productService = $productService;
    }

    public function getProducts(Request $request)
    {
        $products = $this->productService->index($request);

        return ProductResource::collection($products);

    }

    public function logout(Request $request)
    {

        $request->user()->tokens()->delete();
        return response()->json(['status' => 'success', 'message' => 'Successfully logout',], 200);
    }
}
