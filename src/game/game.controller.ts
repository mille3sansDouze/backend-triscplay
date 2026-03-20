import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { GameService } from './game.service';
import { Game } from './game.entity';

@Controller('game')
export class GameController {
    constructor(private readonly gameService: GameService) {}

  @Get()
  findAll(): Promise<Game[]> {
    return this.gameService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Game | null> {
    return this.gameService.findOne(+id);
  }

  @Post()
  create(@Body() game: Partial<Game>): Promise<Game> {
    return this.gameService.create(game);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() game: Partial<Game>): Promise<Game | null> {
    return this.gameService.update(+id, game);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.gameService.remove(+id);
  }
}
