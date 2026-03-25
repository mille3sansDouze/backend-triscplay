import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Play } from './play.entity';
import { User } from 'src/user/user.service';
import { GameInterface } from 'src/game/game.service';

export interface PlayInterface{
    id: number;
    user: User;
    game: GameInterface; //créer interface dans Game
    score: number;
    created_at: Date;
}

@Injectable()
export class PlayService {
constructor(
        @InjectRepository(Play)
        private readonly playRepo: Repository<PlayInterface>,
    ) {}

    async findAll(): Promise<PlayInterface[]> {
        const plays = await this.playRepo.find();
        return plays;
    }

    async findOne(id: number): Promise<PlayInterface> {
        const play = await this.playRepo.findOneBy({ id })

        if (!play) throw new NotFoundException(`Utilisateur ${id} introuvable`);

        return play;
    }

    async create(score: number): Promise<PlayInterface> {
        const newPlay = await this.playRepo.save({score});

        return newPlay;
    }

    async updateScore(id: number, score: number): Promise <PlayInterface> {
        const play = await this.findOne(id);

        play.score = score;

        await this.playRepo.save(play);

        return play;
    }

    async remove(id: number): Promise<void> {
        await this.playRepo.delete({ id })
    }
}
