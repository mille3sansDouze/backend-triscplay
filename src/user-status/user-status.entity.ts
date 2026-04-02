import { 
    Column,
    Entity, 
    PrimaryGeneratedColumn 
} from "typeorm";

@Entity('UserStatus')
export class UserStatus{
    @PrimaryGeneratedColumn()
    id_status: number
    
    @Column()
    libelle: String;
}