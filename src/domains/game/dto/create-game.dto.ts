import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength, IsOptional, IsNumber, IsBoolean} from 'class-validator';
export class CreateGameDto {
    @ApiProperty({ example: 'Minecraft', description: 'Nom du jeu'})
    @IsString()
    @IsNotEmpty({message:"Vous devez entrer un nom de jeu"})
    name: string;

    @ApiProperty({ example: 'Ceci est un jeu de bac à sable', description:'Description du jeu'})
    @IsString()
    @MaxLength(300)
    @IsOptional()
    description: string;

    @ApiProperty({ example: '7', description: 'Le PEGI du jeu'})
    @IsNumber()
    @IsOptional()
    pegi: number;

    @ApiProperty({ example: '4', description: 'Le nombre de joueur qui peuvent y jouer'})
    @IsNumber()
    @IsNotEmpty({message:"Rentrez un nombre de joueurs (min1)"})
    player_count: number;

    @ApiProperty({ example: 'true', description: 'Existe-t-il un mode multijouer au jeu ?'})
    @IsBoolean()
    @IsNotEmpty({message:"Renseignez si le jeu est multijouer ou non"})
    is_multiplayer: boolean;
}