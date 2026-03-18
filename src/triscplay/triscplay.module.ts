import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TriscplayController } from './triscplay.controller';
import { TriscplayTypeormEntity } from './triscplay.entity';
import { TriscplayService } from './triscplay.service';

@Module({
  imports: [TypeOrmModule.forFeature([TriscplayTypeormEntity])],
  controllers: [TriscplayController],
  providers: [TriscplayService],
})
export class TasksModule {}