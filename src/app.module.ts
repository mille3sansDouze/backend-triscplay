import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GameModule } from './game/game.module';
import { UserModule } from './user/user.module';
import { PlayModule } from './play/play.module';
import { SessionController } from './session/session.controller';
import { SessionModule } from './session/session.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    GameModule,
    UserModule,
    PlayModule,
    SessionModule,
  ],
  controllers: [AppController, SessionController],
  providers: [AppService],
})
export class AppModule {}