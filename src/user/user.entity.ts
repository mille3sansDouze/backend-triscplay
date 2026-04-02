
import { ConnexionStatus } from 'src/connexionStatus/connexionStatus.entity';
import { Play } from 'src/play/play.entity';
import { UserStatus } from 'src/user-status/user-status.entity';
import { 
    Entity, 
    PrimaryGeneratedColumn, 
    Column,
    OneToMany,
    ManyToOne,
    JoinColumn,
} from 'typeorm';

@Entity('User')
export class UserTypeOrm {
  @PrimaryGeneratedColumn('uuid')
  id_user: string;

  @Column({unique: true})
  email: string

  @Column()
  displayed_name: string;

  @Column()
  user_name: string;

  @Column()
  password: string;

  @Column({ nullable: true})
  profile_pic_url: string;

  @Column({ nullable: true })
  description: string;

  @OneToMany(() => Play, (play) => play.user) plays: Play[];
  @ManyToOne(() => ConnexionStatus, (connexionStatus) => connexionStatus.users, { nullable: false })
  @JoinColumn({ name: 'id_connexion' })
  connexion: ConnexionStatus;
  @ManyToOne(() => UserStatus, (userStatus) => userStatus.users, { nullable: false })
  @JoinColumn({ name: 'id_status' })
  status: UserStatus;
}
