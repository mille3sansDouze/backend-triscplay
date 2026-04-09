import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserTypeOrm } from './user.entity'; 
import { SessionModule } from '../../technical/session/session.module';

@Module({
  imports: [TypeOrmModule.forFeature([UserTypeOrm]), SessionModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}