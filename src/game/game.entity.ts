import { UserTypeOrm } from 'src/user/user.entity';
import { 
  Entity,
  PrimaryGeneratedColumn, 
  Column, 
  ManyToMany 
} from 'typeorm';

@Entity()
export class Game {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column()
  pegi: number;

  @Column()
  playerCount: number;

  @Column()
  isMultiplayer: boolean;

  @ManyToMany(() => UserTypeOrm, (user) => user.games) users: UserTypeOrm[];
}