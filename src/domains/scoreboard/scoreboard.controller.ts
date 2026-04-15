import { Controller, Get, Post, Delete, Param, Body, UseGuards, UnauthorizedException } from '@nestjs/common';
import { ScoreboardService } from './scoreboard.service';
import { CreateScoreboardDto } from './dto/create-scoreboard.dto';
import { CurrentUser } from 'src/common/decorators/current-user.decorator';
import { SessionGuard } from 'src/common/guards/session.guard';
import { CurrentUserRole } from 'src/common/decorators/current-user-role.decorator';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('ScoreBoard')
@Controller('scoreboard')
export class ScoreboardController {
    constructor(private readonly scoreboardService: ScoreboardService) {}

    //ROUTES PUBLIQUES
    @Get()
    findAll() {
        return this.scoreboardService.findAll();
    }
    
    @Get(':id')
    findOne(@Param('id') id: number){
        return this.scoreboardService.findOne(id);
    }
    
    //CONNEXION REQUISE
    @Post()
    @ApiBearerAuth('session-id')
    @UseGuards(SessionGuard)
    create(
        @Body() body: CreateScoreboardDto,
        @CurrentUser() userId: string,
    ) {
      console.log("BODY:", body);
      console.log("TYPE id_game:", typeof body.id_game);
    return this.scoreboardService.create(body, userId);
  }
    
    @Delete(':id')
    @ApiBearerAuth('session-id')
    @UseGuards(SessionGuard)
    async remove(
        @Param('id') id: number,
        @CurrentUser() userId: string,
        @CurrentUserRole() userRole: string,
    ) {
    const isAdmin = userRole === 'admin';

    if (!isAdmin) {
      // Un utilisateur normal ne peut supprimer que son propre score
      const score = await this.scoreboardService.findOne(id);
      if (!score) throw new UnauthorizedException('Score non trouvé');
      if (score.user.id_user !== userId) throw new UnauthorizedException('Action non autorisée');
    }

    return this.scoreboardService.remove(id);
  }
}