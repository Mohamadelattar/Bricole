<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProjetResource extends JsonResource
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
            'titre'       => $this->titre,
            'description'    => $this->description,
            'budget'     => $this->budget,
            'statut'     => "Not approuved",
            'dateDebut'  => $this->dateDebut,
            'dateFin'    => $this->dateFin,
            'client_id'  => $this->client_id,
            'categorie_id' =>$this->categorie_id,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
