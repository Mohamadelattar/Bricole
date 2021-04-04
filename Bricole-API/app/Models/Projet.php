<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Projet extends Model
{
    use HasFactory;

    protected $fillable = [
        'titre',
        'description',
        'budget',
        'password',
        'statut',
        'dateDebut',
        'dateFin',
        'client_id',
        'categorie_id',
    ];

    public function applications()
    {
        return $this->hasMany(Application::class);
    }

    public function categorie()
    {
        return $this->belongsTo(Categorie::class,'foreign_key');
    }

    public function client()
    {
        return $this->belongsTo(Client::class,'foreign_key');
    }
}
