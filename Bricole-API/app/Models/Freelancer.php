<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;

class Freelancer extends Model
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
        'profession_id',
    ];

    public function applications()
    {
        return $this->hasMany(Application::class);
    }

    public function feedbacks()
    {
        return $this->hasMany(Feedback::class);
    }

    public function profession()
    {
        return $this->belongsTo(Profession::class,'foreign_key');
    }

    public function portfolios()
    {
        return $this->hasMany(Portfolio::class);
    }

    public function suppFreelancers()
    {
        return $this->hasMany(Freelancer::class);
    }
}
