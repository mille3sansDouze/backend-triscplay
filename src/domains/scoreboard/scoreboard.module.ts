import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Scoreboard } from './scoreboard.entity';
import { ScoreboardService } from './scoreboard.service';
import { ScoreboardController } from './scoreboard.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Scoreboard])],
  providers: [ScoreboardService],
  controllers: [ScoreboardController]
})
export class ScoreboardModule {}
