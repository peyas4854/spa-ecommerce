<?php

namespace App\Http\Controllers\Base;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class BaseController extends Controller
{
    public function returnResponse($status, $msg, $data = null, $status_code=200)
    {
        $response = [
            'status'  => $status,
            'message' => $msg,
            'data'    => $data,
        ];
        return response()->json($response, $status_code);
    }
}
