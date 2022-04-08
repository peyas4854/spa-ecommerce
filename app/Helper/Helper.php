<?php


namespace App\Helper;


use Illuminate\Support\Facades\Storage;

class Helper
{
    public static function fileUpload($file, $path = 'products/'): string
    {
        $image_parts    = explode(";base64,", $file);
        $file           = base64_decode($image_parts[1]);
        $image_type_aux = explode("image/", $image_parts[0]);
        $image_type     = $image_type_aux[1];
        $file_name      = 'image-' . time() . '.' . $image_type;
        if (!Storage::disk('public')->put($path . $file_name, $file)) {
            $file_name = '';
        }
        return $file_name;
    }
}
