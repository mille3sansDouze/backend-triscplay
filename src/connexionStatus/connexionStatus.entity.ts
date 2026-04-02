import { 
    Entity, 
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
    
 } from "typeorm";
 import { UserTypeOrm } from "src/user/user.entity";


@Entity('Connexion')
export class ConnexionStatus{
    @PrimaryGeneratedColumn()
    id_connexion: number

    @Column()
    libelle: String

    @OneToMany(() => UserTypeOrm, (user) => user.connexion)
    users: UserTypeOrm[];
}