import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TriscplayTypeormEntity } from './triscplay.entity';

export interface Task {
  id: string;
  title: string;
  description: string;
  done: boolean;
}

@Injectable()
export class TriscplayService {
  constructor(
    @InjectRepository(TriscplayTypeormEntity)
    private readonly taskRepo: Repository<TriscplayTypeormEntity>,
  ) {}
};
