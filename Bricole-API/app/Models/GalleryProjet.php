<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GalleryProjet extends Model
{
    use HasFactory;

    protected $fillable = [
        'filename',
        'projet_id',
    ];

    public function projet()
    {
        return $this->belongsTo(Projet::class,'foreign_key');
    }
}
