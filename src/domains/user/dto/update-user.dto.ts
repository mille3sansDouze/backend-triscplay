import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsEmail, IsOptional, IsString } from "class-validator";

export class UpdateUserDto {

    //Utilisateur seulement peut changer
    @ApiPropertyOptional({ example: 'nouveauMotDePasse' })
    @IsOptional()
    @IsString()
    password?: string;

    //Utilisateur et Admin peuvent changer
    @ApiPropertyOptional({ example: 'NouveauNom' })
    @IsOptional()
    @IsString()
    user_name?: string;

    @ApiPropertyOptional({ example: 'https://image.com/nouvelle-photo.jpg' })
    @IsOptional()
    @IsString()
    profile_pic_url?: string;

    @ApiPropertyOptional({ example: 'Ma nouvelle bio' })
    @IsOptional()
    @IsString()
    description?: string;

    //Admin seulement peut changer
    @ApiPropertyOptional({ example: "nouveau_mail@mail.fr"})
    @IsOptional()
    @IsEmail()
    email?: string;

    @ApiPropertyOptional({ example: 'MonNouveauUserID '})
    @IsOptional()
    @IsString()
    id_name?: string;
}