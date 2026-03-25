import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Play } from './play.entity';
import { PlayService } from './play.service';
import { PlayController } from './play.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Play])],
  providers: [PlayService],
  controllers: [PlayController]
})
export class PlayModule {}
