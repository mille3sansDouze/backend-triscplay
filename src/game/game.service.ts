import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Game } from './game.entity';

export interface GameInterface {
  id_game: number;
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

  findOne(id_game: number): Promise<GameInterface | null> {
    return this.gameRepository.findOneBy({ id_game });
  }

  create(game: Partial<Game>): Promise<GameInterface> {
    const newGame = this.gameRepository.create(game);
    return this.gameRepository.save(newGame);
  }

  async update(id_game: number, game: Partial<GameInterface>): Promise<GameInterface | null> {
    await this.gameRepository.update(id_game, game);
    return this.findOne(id_game);
  }

  async remove(id: number): Promise<void> {
    await this.gameRepository.delete(id);
  }
}