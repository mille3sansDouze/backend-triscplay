import { Module } from '@nestjs/common';
import { ConnexionController } from './connexionStatus.controller';
import { ConnexionService } from './connexionStatus.service';
import { ConnexionStatus } from './connexionStatus.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ConnexionStatus])],
  controllers: [ConnexionController],
  providers: [ConnexionService]
})
export class ConnexionModule {}
