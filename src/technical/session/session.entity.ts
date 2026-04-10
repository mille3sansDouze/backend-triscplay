import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { UserTypeOrm } from '../../domains/user/user.entity';

@Entity('session')
export class Session {
  @PrimaryGeneratedColumn('uuid')
  session_id: string;

  @Column()
  user_id: string;

  @Column({ type: 'datetime' })
  expire_at: Date;

  @Column({ default: 'user'})
  role: string;

  @ManyToOne(() => UserTypeOrm)
  @JoinColumn({ name: 'user_id' })
  user: UserTypeOrm;
    id_user: any;
}