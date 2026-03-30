import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { PlayService } from './play.service';
import { CreatePlayDto } from './dto/create-play.dto';

@Controller('play')
export class PlayController {
    constructor(private readonly playService: PlayService) {}

    @Get()
    findAll() {
        return this.playService.findAll();
    }
    
    @Get(':id')
    findOne(@Param('id') id: number){
        return this.playService.findOne(id);
    }
    
    @Post()
    create(@Body() body: CreatePlayDto) {
        return this.playService.create(body.id_user, body.id_game, body.score);
    }
    
    @Patch(':id')
    update(@Param('id') id: number, @Body() body: { score: number }) {
        return this.playService.updateScore(id, body.score);
    }
    
    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.playService.remove(id);
    }

}