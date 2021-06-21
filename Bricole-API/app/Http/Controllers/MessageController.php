<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Message;
use App\Http\Resources\MessageResource;

class MessageController extends Controller
{
    public function getUsersMessages(Request $request){
        $accaountType = $request->accaountType;
        $id = $request->id;
         
        
        if($accaountType == "Freelancer")
        {
            $messages = DB::table('messages')
            ->where('freelancer_id',$id)
            ->select('client_id','message')
            ->distinct()
            ->get();
        }
        else if($accaountType == "Client")
        {
            $messages = DB::table('messages')
            ->where('client_id',$id)
            ->select('freelancer_id','message')
            ->distinct()
            ->orderBy('created_at','desc')
            ->get();
        }

        return response()->json($messages);
    }

    public function getMessagesFirst(Request $request){
        $accaountType = $request->accaountType;
        $id = $request->id;
         
        
        if($accaountType == "Freelancer")
        {
            $messages = DB::table('messages')
            ->where('freelancer_id',$id)
            ->select('message')
            ->orderBy('created_at','desc')
            ->get();
        }
        else if($accaountType == "Client")
        {
            $messages = DB::table('messages')
            ->where('client_id',$id)
            ->select('message')
            ->orderBy('created_at','desc')
            ->get();
        }

        return response()->json($messages);
    }

    public function getClientConversation(int $idClient , int $idFreelancer)
    {
        $messages = DB::table('messages')
            ->where('client_id',$idClient)
            ->where('freelancer_id',$idFreelancer)
            ->select('id','message')
            ->get();

        return response()->json($messages);

    }

    public function store(Request $request)
    {

        $message = Message::create($request->all());
        

        return (new MessageResource($message))
                ->response()
                ->setStatusCode(201);
    }

     
}
