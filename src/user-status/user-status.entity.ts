import { UserTypeOrm } from "src/user/user.entity";
import { 
    Column,
    Entity, 
    OneToMany, 
    PrimaryGeneratedColumn 
} from "typeorm";

@Entity('UserStatus')
export class UserStatus{
    @PrimaryGeneratedColumn()
    id_status: number
    
    @Column()
    libelle: String;

    @OneToMany(() => UserTypeOrm, (user) => user.status)
    users: UserTypeOrm[];
}