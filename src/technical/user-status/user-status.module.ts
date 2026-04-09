import { Module } from '@nestjs/common';
import { StatusService } from './user-status.service';
import { UserStatusController } from './user-status.controller';
import { UserStatus } from './user-status.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([UserStatus])],
  controllers: [UserStatusController],
  providers: [StatusService]
  
})
export class UserStatusModule {}
