import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";

export class UpdateUserDto {
    @ApiPropertyOptional({ example: 'NouveauNom' })
    @IsOptional()
    @IsString()
    user_name?: string;

    @ApiPropertyOptional({ example: 'nouveauMotDePasse' })
    @IsOptional()
    @IsString()
    password?: string;

    @ApiPropertyOptional({ example: 'https://image.com/nouvelle-photo.jpg' })
    @IsOptional()
    @IsString()
    profile_pic_url?: string;

    @ApiPropertyOptional({ example: 'Ma nouvelle bio' })
    @IsOptional()
    @IsString()
    description?: string;
}