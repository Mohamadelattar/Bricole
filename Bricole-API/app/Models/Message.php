<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    use HasFactory;
    protected $fillable = [
        'message',
        'freelancer_id',
        'client_id',
    ];
    public function client()
    {
        return $this->belongsTo(Client::class,'foreign_key');
    }

    public function freelancer()
    {
        return $this->belongsTo(Freelancer::class,'foreign_key');
    }
}
