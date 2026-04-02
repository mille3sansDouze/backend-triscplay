import { IsNotEmpty, IsString } from "class-validator";

export class CreateUserStatusDto {
    @IsString()
    @IsNotEmpty({message: "Le statut doit avoir un libellé"})
    libelle: String
}