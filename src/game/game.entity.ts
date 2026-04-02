import { Play } from 'src/play/play.entity';
import { 
  Entity,
  PrimaryGeneratedColumn, 
  Column,
  OneToMany, 
} from 'typeorm';

@Entity('Game')
export class Game {
  @PrimaryGeneratedColumn()
  id_game: number;

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

  @OneToMany(() => Play, (play) => play.game) plays: Play[];

}