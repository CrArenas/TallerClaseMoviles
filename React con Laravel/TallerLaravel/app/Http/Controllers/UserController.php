<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function index()
    {
        $users = User::all();
        return response()->json($users);
    }

    public function store(Request $request)
    {
        $user = new User();
        $user->name = $request->name;
        $user->password = $request->password;
        $user->save();
        return response()->json($user);
    }

    public function show(string $id)
    {
        $user = User::find($id);
        return response()->json($user);
    }

    public function update(Request $request, string $id)
    {
        //
    }


    public function destroy(string $id)
    {
        //
    }
}
