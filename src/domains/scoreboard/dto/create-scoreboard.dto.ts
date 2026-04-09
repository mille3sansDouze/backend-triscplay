import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateScoreboardDto{
    @IsString()
    @IsNotEmpty({message: "Tu dois entrer un ID d'utilisateur"})
    id_user: String;

    @IsNumber()
    @IsNotEmpty({message: "Tu dois entrer un ID de jeu"})
    id_game: number;

    @IsNumber()
    @IsNotEmpty({message: "Tu dois entrer un score"})
    score: number;
}