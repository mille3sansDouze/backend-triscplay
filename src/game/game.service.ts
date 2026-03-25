import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Game } from './game.entity';

export interface GameInterface {
  id: number;
  name: string;
  description: string;
  pegi: number;
  playerCount: number;
  isMultiplayer: boolean;
}

@Injectable()
export class GameService {
  constructor(
    @InjectRepository(Game)
    private gameRepository: Repository<Game>,
  ) {}

  findAll(): Promise<GameInterface[]> {
    return this.gameRepository.find();
  }

  findOne(id: number): Promise<GameInterface | null> {
    return this.gameRepository.findOneBy({ id });
  }

  create(game: Partial<Game>): Promise<GameInterface> {
    const newGame = this.gameRepository.create(game);
    return this.gameRepository.save(newGame);
  }

  async update(id: number, game: Partial<GameInterface>): Promise<GameInterface | null> {
    await this.gameRepository.update(id, game);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.gameRepository.delete(id);
  }
}