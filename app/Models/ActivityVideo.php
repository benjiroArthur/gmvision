<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Cohensive\Embed\Facades\Embed;

class ActivityVideo extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function getVideoHtmlAttribute()
    {
        $embed = Embed::make($this->url)->parseUrl();

        if (!$embed) {
            return '';
        }

        $embed->setAttribute(['width' => 400]);
        return $embed->getHtml();
    }
}
