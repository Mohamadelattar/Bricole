<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Portfolio extends Model
{
    use HasFactory;
    protected $fillable = [
        'pseudo',
        'titre',
        'photo',
        'description',
        'freelancer_id',
    ];
    public function galleries()
    {
        return $this->hasMany(Gallery::class);
    }

    public function freelancer()
    {
        return $this->belongsTo(Freelancer::class);
    }
}
