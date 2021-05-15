<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GalleryPortfolio extends Model
{
    use HasFactory;
    protected $fillable = [
        'filename',
        'portfolio_id',
    ];
    public function portfolio()
    {
        return $this->belongsTo(Portfolio::class,'foreign_key');
    }
}
