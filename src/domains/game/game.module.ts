import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Game } from './game.entity';
import { GameController } from './game.controller';
import { GameService } from './game.service';
import { SessionModule } from 'src/technical/session/session.module';

@Module({
  imports: [TypeOrmModule.forFeature([Game]), SessionModule],
  controllers: [GameController],
  providers: [GameService],
})
export class GameModule {}