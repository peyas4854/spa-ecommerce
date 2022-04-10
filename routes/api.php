<?php

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Front\FrontEndController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);


// Admin Routes
Route::middleware(['auth:sanctum', 'admin'])->group(function () {
    Route::get('/admin/auth', function (Request $request) {
        return $request->user();
    });
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::apiResource('/product', \App\Http\Controllers\ProductController::class);
});

//FrontEndRoutes
Route::group(['prefix' => 'frontend'], function () {
    Route::get('/products', [\App\Http\Controllers\Front\FrontEndController::class, 'getProducts']);
    Route::post('/logout', [\App\Http\Controllers\Front\FrontEndController::class, 'logout'])->middleware('auth:sanctum');;
});

Route::get('/user/auth', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');







