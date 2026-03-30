import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
<<<<<<< HEAD
import { GameInterface, GameService } from './game.service';
import { CreateGameDto } from './dto/create-game.dto';

@Controller('game')
export class GameController {
    constructor(private readonly gameService: GameService) {}

  @Get()
  findAll(): Promise<GameInterface[]> {
=======
import { GameService } from './game.service';
import { Game } from './game.entity';

@Controller('game')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Get()
  findAll(): Promise<Game[]> {
>>>>>>> dev-game
    return this.gameService.findAll();
  }

  @Get(':id')
<<<<<<< HEAD
  findOne(@Param('id') id: string): Promise<GameInterface | null> {
=======
  findOne(@Param('id') id: string): Promise<Game | null> {
>>>>>>> dev-game
    return this.gameService.findOne(+id);
  }

  @Post()
<<<<<<< HEAD
  create(@Body() body:CreateGameDto){
    return this.gameService.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() game: Partial<GameInterface>): Promise<GameInterface | null> {
=======
  create(@Body() game: Partial<Game>): Promise<Game> {
    return this.gameService.create(game);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() game: Partial<Game>): Promise<Game | null> {
>>>>>>> dev-game
    return this.gameService.update(+id, game);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.gameService.remove(+id);
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> dev-game
