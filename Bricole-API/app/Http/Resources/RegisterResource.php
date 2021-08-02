<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class RegisterResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id'         => $this->id,
            'pseudo'       => $this->pseudo,
            'nom'    => $this->nom,
            'prenom'  => $this->prenom,
            'password' => Hash::make($this->password),
            'email' => $this->email,
            'telephone' => $this->telephone,
            'filename' => $this->filename,
            'ville' => 'Agadir',
            'soldeGlobal' => 100,
            'soldeActeul' => 100,
            'profession_id' => 1,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];

    }
}
