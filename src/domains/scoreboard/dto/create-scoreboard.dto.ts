import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateScoreboardDto{

    @ApiProperty({example: '1', description: 'ID du jeu sur lequel le score a été fait'})
    @Type(() => Number)
    @IsNumber()
    @IsNotEmpty({message: "Tu dois entrer un ID de jeu"})
    id_game: number;

    @ApiProperty({example: '1500', description: 'Score (nombre pour le moment) du joueur sur ce jeu'})
    @IsNumber()
    @IsNotEmpty({message: "Tu dois entrer un score"})
    score: number;
}