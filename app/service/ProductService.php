<?php


namespace App\service;


use App\Models\Product;

class ProductService
{
    /**
     * @param $request
     * @return \Illuminate\Contracts\Pagination\LengthAwarePaginator
     */
    public function index($request)
    {
        $query = Product::query();
        if ($request->filled('search')) {
            $query->where('name', 'LIKE', "%{$request->search}%");
        }
        return $query->paginate($request->per_page);
    }

}
