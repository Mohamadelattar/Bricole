<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Profession extends Model
{
    use HasFactory;
    protected $fillable = [
        'nom',
    ];
    public function freelancers()
    {
        return $this->hasMany(Freelancer::class);
    }
}
