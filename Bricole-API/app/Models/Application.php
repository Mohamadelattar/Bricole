<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Application extends Model
{
    use HasFactory;

    protected $fillable = [
        'message',
        'dateDebut',
        'etat',
        'freelancer_id',
        'projet_id',
    ];

    public function projet(){
        return $this->belongsTo(Projet::class,'foreign_key');
    }

    public function freelancer(){
        return $this->belongsTo(Freelancer::class,'foreign_key');
    }
}
