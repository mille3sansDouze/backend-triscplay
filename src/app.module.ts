import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GameModule } from './game/game.module';
import { UserModule } from './user/user.module';
import { PlayModule } from './play/play.module';
import { ConnexionModule } from './connexionStatus/connexionStatus.module';
import { UserStatusModule } from './user-status/user-status.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'maisou',
        database: 'triscplay',
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
    }),
    GameModule,
    UserModule,
    PlayModule,
    ConnexionModule,
    UserStatusModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

