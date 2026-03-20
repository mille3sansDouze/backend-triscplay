import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Game } from './game.entity';

@Injectable()
export class GameService {
  constructor(
    @InjectRepository(Game)
    private gameRepository: Repository<Game>,
  ) {}

  findAll(): Promise<Game[]> {
    return this.gameRepository.find();
  }

  findOne(id: number): Promise<Game | null> {
    return this.gameRepository.findOneBy({ id });
  }

  create(game: Partial<Game>): Promise<Game> {
    const newGame = this.gameRepository.create(game);
    return this.gameRepository.save(newGame);
  }

  async update(id: number, game: Partial<Game>): Promise<Game | null> {
    await this.gameRepository.update(id, game);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.gameRepository.delete(id);
  }
}