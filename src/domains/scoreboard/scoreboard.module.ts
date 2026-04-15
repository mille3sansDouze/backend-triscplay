import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Scoreboard } from './scoreboard.entity';
import { ScoreboardService } from './scoreboard.service';
import { ScoreboardController } from './scoreboard.controller';
import { SessionModule } from 'src/technical/session/session.module';
import { UserTypeOrm } from '../user/user.entity';
import { Game } from '../game/game.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Scoreboard, UserTypeOrm, Game]), SessionModule],
  providers: [ScoreboardService],
  controllers: [ScoreboardController]
})
export class ScoreboardModule {}
