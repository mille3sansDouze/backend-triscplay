import { 
    Entity, 
    PrimaryGeneratedColumn,
    Column,
 } from "typeorm";


@Entity('Connexion')
export class ConnexionStatus{
    @PrimaryGeneratedColumn()
    id_connexion: number

    @Column()
    libelle: String
}