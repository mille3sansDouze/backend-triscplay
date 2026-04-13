import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateScoreboardDto{
    @ApiProperty({example: 'UUID valide de la base de donnée', description:"UUID de l'utilisateur courant"})
    @IsString()
    @IsNotEmpty({message: "Tu dois entrer un ID d'utilisateur"})
    id_user: String;

    @ApiProperty({example: '1', description: 'ID du jeu sur lequel le score a été fait'})
    @IsNumber()
    @IsNotEmpty({message: "Tu dois entrer un ID de jeu"})
    id_game: number;

    @ApiProperty({example: '1500', description: 'Score (nombre pour le moment) du joueur sur ce jeu'})
    @IsNumber()
    @IsNotEmpty({message: "Tu dois entrer un score"})
    score: number;
}