<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Administrateur extends Model
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

    public function suppFreelancer()
    {
        return $this->hasMany(SuppFreelancer::class);
    }

    public function suppClient()
    {
        return $this->hasMany(SuppClient::class);
    }
}
