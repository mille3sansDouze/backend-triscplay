import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Scoreboard } from './scoreboard.entity';
import { CreateScoreboardDto } from './dto/create-scoreboard.dto';

@Injectable()
export class ScoreboardService {
  constructor(
    @InjectRepository(Scoreboard)
    private readonly scoreRepo: Repository<Scoreboard>,
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

  async create(dto: CreateScoreboardDto): Promise<Scoreboard> {
    const score = this.scoreRepo.create({
      user: { id: dto.id_user } as any,
      game: { id: dto.id_game } as any,
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
