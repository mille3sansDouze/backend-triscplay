import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn, JoinColumn } from 'typeorm';
import { UserTypeOrm } from 'src/domains/user/user.entity';
import { Game } from 'src/domains/game/game.entity';

@Entity('Scoreboard')
export class Scoreboard {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UserTypeOrm, (user) => user.scores)
  @JoinColumn({ name: 'id_user'})
  user: UserTypeOrm;

  @ManyToOne(() => Game, (game) => game.scores)
  @JoinColumn({ name: 'id_game'})
  game: Game;

  @Column()
  score: number;

  @CreateDateColumn()
  created_at: Date;
}