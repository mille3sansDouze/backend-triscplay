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
    return this.scoreRepo.find();
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
}
