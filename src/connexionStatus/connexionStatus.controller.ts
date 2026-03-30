import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ConnexionService } from './connexionStatus.service';
import { CreateConnexionStatusDto } from './dto/create-connexionStatus.dto';

@Controller('connexion')
export class ConnexionController {
    constructor(private readonly connexionService: ConnexionService) {}
    @Get()
        findAll() {
            return this.connexionService.findAll();
        }
    
        @Get(':id')
        findOne(@Param('id') id_connexion: number){
            return this.connexionService.findOne(id_connexion);
        }
    
        @Post()
        create(@Body() body: CreateConnexionStatusDto) {
            return this.connexionService.create(body.libelle);
        }
    
        @Patch(':id')
        update(@Param('id') id_connexion: number, @Body() body: { libelle: string }) {
            return this.connexionService.updateStatus(id_connexion, body.libelle);
        }
}
