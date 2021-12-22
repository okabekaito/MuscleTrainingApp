<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Post;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::all();
        return response()->json($posts, 200);
    }

    public function create(Request $request)
    {
        $post = new Post;
        $post->menu = $request->menu;
        $post->num = $request->num;
        $post->description = $request->description;
        $post->save();
        return response()->json($post, 200);
    }
}
