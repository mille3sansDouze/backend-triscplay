import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { GameInterface, GameService } from './game.service';
import { CreateGameDto } from './dto/create-game.dto';

@Controller('game')
export class GameController {
    constructor(private readonly gameService: GameService) {}

  @Get()
  findAll(): Promise<GameInterface[]> {
    return this.gameService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<GameInterface | null> {

    return this.gameService.findOne(+id);
  }

  @Post()
  create(@Body() body:CreateGameDto){
    return this.gameService.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() game: Partial<GameInterface>): Promise<GameInterface | null> {

    return this.gameService.update(+id, game);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.gameService.remove(+id);
  }

}
