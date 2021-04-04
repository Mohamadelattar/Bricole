<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SuppFreelancer extends Model
{
    use HasFactory;

    protected $fillable = [
        'message',
        'administrateur_id',
        'freelancer_id',
    ];

    public function administrateur()
    {
        return $this->belongsTo(Administrateur::class,'foreign_key');
    }

    public function freelancer()
    {
        return $this->belongsTo(Freelancer::class,'foreign_key');
    }
}
