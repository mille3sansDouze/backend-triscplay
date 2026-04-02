import { 
    Entity, 
    PrimaryGeneratedColumn,
    Column,
    ManyToMany,
    JoinTable,
 } from "typeorm";
 import { UserTypeOrm } from "src/user/user.entity";


@Entity('Connexion')
export class ConnexionStatus{
    @PrimaryGeneratedColumn()
    id_connexion: number

    @Column()
    libelle: String

    @ManyToMany(() => UserTypeOrm, (user) => user.connexions)
    @JoinTable({
        name: 'StatutConnexion',
        joinColumn: { name: 'id_connexion'},
        inverseJoinColumn: { name: 'id_user' },
    })
    users: UserTypeOrm[]
}