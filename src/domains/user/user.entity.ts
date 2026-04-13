import { Scoreboard } from 'src/domains/scoreboard/scoreboard.entity';
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
  id_name: string;

  @Column()
  user_name: string;

  @Column()
  password: string;

  @Column({ nullable: true})
  profile_pic_url: string;

  @Column({ nullable: true })
  description: string;

  @Column({ default: 'user'})
  role: string;

  @OneToMany(() => Scoreboard, (scoreboard) => scoreboard.user) scores: Scoreboard[];
}
