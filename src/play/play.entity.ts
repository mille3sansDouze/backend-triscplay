import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn, JoinColumn } from 'typeorm';
import { UserTypeOrm } from 'src/user/user.entity';
import { Game } from 'src/game/game.entity';

@Entity('Play')
export class Play {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UserTypeOrm, (user) => user.plays)
  @JoinColumn({ name: 'id_user'})
  user: UserTypeOrm;

  @ManyToOne(() => Game, (game) => game.plays)
  @JoinColumn({ name: 'id_game'})
  game: Game;

  @Column()
  score: number;

  @CreateDateColumn()
  created_at: Date;
}