<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SuppClient extends Model
{
    use HasFactory;

    protected $fillable = [
        'message',
        'administrateur_id',
        'client_id',
    ];

    public function administrateur()
    {
        return $this->belongsTo(Administrateur::class,'foreign_key');
    }

    public function client()
    {
        return $this->belongsTo(Client::class,'foreign_key');
    }
}
