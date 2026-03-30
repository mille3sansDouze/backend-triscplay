import { IsNotEmpty, IsString } from "class-validator";

export class CreateConnexionStatusDto{
    @IsString()
    @IsNotEmpty({message: "Vous devez entrer un libellé pour le statut"})
    libelle: String
}