<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Base\BaseController;
use App\Http\Controllers\Controller;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends BaseController
{

    public function login(Request $request){
        $request->validate([
            'email'       => 'required|string|email',
            'password'    => 'required|string',

        ]);
        if (!Auth::attempt($request->only('email', 'password'))) {
            return response()->json(['message' => 'Invalid Credentials, Please try again.'], 401);
        }

        $user = User::where('email', $request['email'])->firstOrFail();

        $token = $user->createToken('authToken')->plainTextToken;

        return response()->json([
            'message'      => 'Login successful',
            'access_token' => $token,
            'token_type' => 'Bearer',
            'expires_at'   => Carbon::now()->addWeeks(1)->toDateTimeString(),
            'user' => Auth::user(),
        ]);
    }

    public function logout(Request $request)
    {

        $request->user()->tokens()->delete();
        return response()->json(['status' => 'success', 'message' => 'Successfully logout',], 200);
    }
    public function register(RegisterRequest $request){

        $user = new User();
        $user->fill($request->all());
        $user->password = Hash::make($request->password);
        $user->save();

        return $this->returnResponse('success','Registration successful',null,200);
    }
}
