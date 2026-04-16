import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Scoreboard } from './scoreboard.entity';
import { CreateScoreboardDto } from './dto/create-scoreboard.dto';
import { UserTypeOrm } from '../user/user.entity';
import { Game } from '../game/game.entity';

@Injectable()
export class ScoreboardService {
  constructor(
  @InjectRepository(Scoreboard)
  private readonly scoreRepo: Repository<Scoreboard>,

  @InjectRepository(UserTypeOrm)
  private readonly userRepo: Repository<UserTypeOrm>,

  @InjectRepository(Game)
  private readonly gameRepo: Repository<Game>,
) {}

  async findAll(): Promise<Scoreboard[]> {
    return this.scoreRepo.find({
      relations:['game', 'user'],
      order: { created_at: 'DESC' }
    });
  }

  async findOne(id: number): Promise<Scoreboard> {
    const play = await this.scoreRepo.findOneBy({ id });

    if (!play) {
      throw new NotFoundException(`Score ${id} introuvable`);
    }

    return play;
  }

  async create(dto: CreateScoreboardDto, userId: string): Promise<Scoreboard> {
    const user = await this.userRepo.findOneBy({ id_user: userId });
    const game = await this.gameRepo.findOneBy({ id_game: dto.id_game });

    if (!user) throw new NotFoundException("User not found");
    if (!game) throw new NotFoundException("Game not found");

    const score = this.scoreRepo.create({
      user,
      game,
      score: dto.score,
    });

  return this.scoreRepo.save(score);
}

  async updateScore(id: number, score: number): Promise<Scoreboard> {
    const play = await this.findOne(id);

    play.score = score;

    return this.scoreRepo.save(play);
  }

  async remove(id: number): Promise<void> {
    await this.scoreRepo.delete({ id });
  }


  async findAllByUser(userId: string): Promise<Scoreboard[]> {
    const user = await this.userRepo.findOneBy({ id_user: userId });

    if (!user) {
      throw new NotFoundException(`Utilisateur ${userId} introuvable`);
    }

    return this.scoreRepo.find({
      where: { user: { id_user: userId } },
      relations: ['game'],
      order: { created_at: 'DESC' }
    });
  }


  async findAllByGame(gameId: number): Promise<Scoreboard[]> {
    const game = await this.gameRepo.findOneBy({ id_game: gameId });

    if (!game) {
      throw new NotFoundException(`Game ${gameId} introuvable`);
    }

    return this.scoreRepo.find({
      where: { game: { id_game: gameId } },
      relations: ['user'],
      order: { created_at: 'DESC' }
    });
  }

}
