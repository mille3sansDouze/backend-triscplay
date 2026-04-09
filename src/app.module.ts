import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GameModule } from './domains/game/game.module';
import { UserModule } from './domains/user/user.module';
import { ScoreboardModule } from './domains/scoreboard/scoreboard.module';
import { UserStatusModule } from './technical/user-status/user-status.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false,
    }),
    GameModule,
    UserModule,
    ScoreboardModule,
    UserStatusModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}