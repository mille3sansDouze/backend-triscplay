import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreatePlayDto{

    @IsNumber()
    @IsNotEmpty({message: "Tu dois entrer un score"})
    score: number
}