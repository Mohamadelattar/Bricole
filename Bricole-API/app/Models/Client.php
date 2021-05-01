<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;


class Client extends Model
{
    use HasApiTokens, HasFactory;

    protected $fillable = [
        'pseudo',
        'nom',
        'prenom',
        'password',
        'email',
        'telephone',
        'photo',
        'ville',
        'soldeGlobal',
        'soldeActuel',
    ];

    public function projets()
    {
        return $this->hasMany(Projet::class);
    }

    public function feedbacks()
    {
        return $this->hasMany(Feedback::class);
    }

    public function messages()
    {
        return $this->hasMany(Message::class);
    }
}
