import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNumber, IsString } from "class-validator";

export class UpdateGameDto {
    @ApiProperty({example: 'NewGameName', description:'Le nouveau nom du jeu'})
    @IsString()
    name?: string;

    @ApiProperty({example: 'NexDescription', description:'La nouvelle description'})
    @IsString()
    description?: string;

    @ApiProperty({example: 16, description:'Le PEGI était mal entré'})
    @IsNumber()
    pegi?: number;

    @ApiProperty({example: 8, description:'Le nombre de joueur a changé'})
    @IsNumber()
    player_count?: number;

    @ApiProperty({example: false, description:"Le multiplayer est supporté/n'est plus supporté"})
    @IsBoolean()
    is_multiplayer?: boolean;
}