<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ApplicationResource extends JsonResource
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
            'id'            => $this->id,
            'message'       => $this->message,
            'description'   => $this->description,
            'dateDebut'     => $this->dateDebut,
            'etat'          => $this->etat,
            'freelancer_id' => $this->freelancer_id,
            'projet_id'     =>$this->projet_id,
            'created_at'    => $this->created_at,
            'updated_at'    => $this->updated_at,
        ];
    }
}
