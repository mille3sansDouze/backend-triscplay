import { Scoreboard } from 'src/domains/scoreboard/scoreboard.entity';
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
  player_count: number;

  @Column()
  is_multiplayer: boolean;

  @OneToMany(() => Scoreboard, (scoreboard) => scoreboard.game) scores: Scoreboard[];

}