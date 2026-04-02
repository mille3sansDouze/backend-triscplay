import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GameModule } from './game/game.module';
import { UserModule } from './user/user.module';
import { PlayModule } from './play/play.module';
import { ConnexionModule } from './connexionStatus/connexionStatus.module';
import { UserStatusModule } from './user-status/user-status.module';
import { MessageController } from './message/message.controller';
import { MessageService } from './message/message.service';
import { MessageModule } from './message/message.module';

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
    PlayModule,
    ConnexionModule,
    UserStatusModule,
    MessageModule,
  ],
  controllers: [AppController, MessageController],
  providers: [AppService, MessageService],
})
export class AppModule {}