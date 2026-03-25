import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { UserTypeOrm } from 'src/user/user.entity';
import { Game } from 'src/game/game.entity';

@Entity('Play')
export class Play {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UserTypeOrm, (user) => user.plays)
  user: UserTypeOrm;

  @ManyToOne(() => Game, (game) => game.plays)
  game: Game;

  @Column()
  score: number;

  @CreateDateColumn()
  created_at: Date;
}