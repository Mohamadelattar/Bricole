<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    use HasFactory;
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
