import { Controller, Get, Post, Patch, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { GameInterface, GameService } from './game.service';
import { CreateGameDto } from './dto/create-game.dto';
import { SessionGuard } from 'src/common/guards/session.guard';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { Roles } from 'src/common/decorators/roles.decorator';
import { UpdateGameDto } from './dto/update-game.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Games')
@Controller('game')
export class GameController {
    constructor(private readonly gameService: GameService) {}

  //ROUTES PUBLIQUES
  @Get()
  findAll(): Promise<GameInterface[]> {
    return this.gameService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<GameInterface | null> {

    return this.gameService.findOne(+id);
  }

  //ROUTES ADMIN UNIQUEMENT
  @Post()
  @ApiBearerAuth('session-id')
  @UseGuards(SessionGuard, RolesGuard)
  @Roles('admin')
  create(@Body() body:CreateGameDto){
    return this.gameService.create(body);
  }

  @Patch(':id')
  @ApiBearerAuth('session-id')
  @UseGuards(SessionGuard, RolesGuard)
  @Roles('admin')
  update(@Param('id') id: string, @Body() body: UpdateGameDto ){

    return this.gameService.update(+id, body);
  }

  @Delete(':id')
  @ApiBearerAuth('session-id')
  @UseGuards(SessionGuard, RolesGuard)
  @Roles('admin')
  remove(@Param('id') id: string): Promise<void> {
    return this.gameService.remove(+id);
  }

}
