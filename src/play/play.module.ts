import { Module } from '@nestjs/common';
import { PlayService } from './play.service';
import { PlayController } from './play.controller';

@Module({
  providers: [PlayService],
  controllers: [PlayController]
})
export class PlayModule {}
