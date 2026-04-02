import { Play } from 'src/play/play.entity';
import { 
    Entity, 
    PrimaryGeneratedColumn, 
    Column,
    OneToMany,
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
}

