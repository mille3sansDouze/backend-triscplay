import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GameModule } from './game/game.module';
import { UserModule } from './user/user.module';
import { PlayModule } from './play/play.module';
import { ConnexionModule } from './connexionStatus/connexionStatus.module';
import { UserStatusModule } from './user-status/user-status.module';
import { ConfigModule } from '@nestjs/config';
import { ConfigService } from '@nestjs/config';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: config.get<'mysql'>('DB_TYPE'),
        host: config.get<string>('DB_HOST'),
        port: parseInt(config.get<string>('DB_PORT') || '3306', 10),
        username: config.get<string>('DB_USERNAME'),
        password: config.get<string>('DB_PASSWORD'),
        database: config.get<string>('DB_NAME'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
      }),
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

