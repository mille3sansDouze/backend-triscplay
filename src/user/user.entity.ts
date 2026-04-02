<<<<<<< HEAD

import { ConnexionStatus } from 'src/connexionStatus/connexionStatus.entity';
=======
>>>>>>> f751aef01079f3a3694096e632a15e8cc4c6702e
import { Play } from 'src/play/play.entity';
import { 
    Entity, 
    PrimaryGeneratedColumn, 
    Column,
    OneToMany,
    ManyToMany,
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
<<<<<<< HEAD
  @ManyToMany(() => ConnexionStatus, (connexionStatus) => connexionStatus.users)
  connexions: ConnexionStatus[];
}
=======
}

>>>>>>> f751aef01079f3a3694096e632a15e8cc4c6702e
