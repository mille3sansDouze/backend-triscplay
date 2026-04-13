import { IsNotEmpty, IsString, MaxLength, IsOptional, IsNumber, IsBoolean} from 'class-validator';
export class CreateGameDto {
    @IsString()
    @IsNotEmpty({message:"Vous devez entrer un nom de jeu"})
    name: string;

    @IsString()
    @MaxLength(300)
    @IsOptional()
    description: string;

    @IsNumber()
    @IsOptional()
    pegi: number;

    @IsNumber()
    @IsNotEmpty({message:"Rentrez un nombre de joueurs (min1)"})
    player_count: number;

    @IsBoolean()
    @IsNotEmpty({message:"Renseignez si le jeu est multijouer ou non"})
    is_multiplayer: boolean;
}