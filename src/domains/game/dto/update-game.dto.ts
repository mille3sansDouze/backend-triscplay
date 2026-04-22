import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNumber, IsOptional, IsString } from "class-validator";

export class UpdateGameDto {
    @ApiProperty({example: 'NewGameName', description:'Le nouveau nom du jeu'})
    @IsString()
    @IsOptional()
    name?: string;

    @ApiProperty({example: 'NewDescription', description:'La nouvelle description'})
    @IsString()
    @IsOptional()
    description?: string;

    @ApiProperty({example: 16, description:'Le PEGI était mal entré'})
    @IsNumber()
    @IsOptional()
    pegi?: number;

    @ApiProperty({example: 8, description:'Le nombre de joueur a changé'})
    @IsNumber()
    @IsOptional()
    player_count?: number;

    @ApiProperty({example: false, description:"Le multiplayer est supporté/n'est plus supporté"})
    @IsBoolean()
    @IsOptional()
    is_multiplayer?: boolean;
        
    @ApiProperty({example: 'NewUrl', description:'La nouvelle url image'})
    @IsString()
    @IsOptional()
    img_url?: string;
}