import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { ScoreboardService } from './scoreboard.service';
import { CreateScoreboardDto } from './dto/create-scoreboard.dto';

@Controller('play')
export class ScoreboardController {
    constructor(private readonly playService: ScoreboardService) {}

    @Get()
    findAll() {
        return this.playService.findAll();
    }
    
    @Get(':id')
    findOne(@Param('id') id: number){
        return this.playService.findOne(id);
    }
    
    @Post()
    create(@Body() body: CreateScoreboardDto) {
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