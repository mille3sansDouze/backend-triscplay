import { UserTypeOrm } from "src/user/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('Message')
export class Message {
    @PrimaryGeneratedColumn('identity')
    id_message: number;

    @Column()
    contenu: String;

    @Column()
    created_at: Date;

    @ManyToOne(() => UserTypeOrm, (user) => user.messages))
    @JoinColumn({ name : 'id_user' })
}