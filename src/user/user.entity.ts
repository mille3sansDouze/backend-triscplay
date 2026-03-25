import { Game } from 'src/game/game.entity';
import { 
    Entity, 
    PrimaryGeneratedColumn, 
    Column,
    ManyToMany,
    JoinTable,
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

  @ManyToMany(() => Game, (game) => game.users)
  @JoinTable() games: Game[];
}