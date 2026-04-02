import { IsNotEmpty, IsString } from "class-validator";

export class CreateConnexionStatusDto{
    @IsString()
    @IsNotEmpty({message: "Le statut doit avoir un libellé"})
    libelle: String
}