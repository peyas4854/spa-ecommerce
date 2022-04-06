<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{

    public function login(Request $request){
        $request->validate([
            'email'       => 'required|string|email',
            'password'    => 'required|string',

        ]);
        if (!Auth::attempt($request->only('email', 'password'))) {
            return response()->json([
                'message' => 'Invalid login details'
            ], 401);
        }

        $user = User::where('email', $request['email'])->firstOrFail();

        $token = $user->createToken('authToken')->plainTextToken;

        return response()->json([
            'access_token' => $token,
            'token_type' => 'Bearer',
            'expires_at'   => Carbon::now()->addWeeks(1)->toDateTimeString(),
            'user' => Auth::user(),
        ]);
    }

    public function logout(Request $request)
    {

        $request->user()->tokens()->delete();
        //$request->user()->currentAccessToken()->delete();
        return response()->json(['status' => 'success', 'message' => 'Successfully logout',], 200);
    }
    public function register(Request $request){
        return $request->all();
    }
}
