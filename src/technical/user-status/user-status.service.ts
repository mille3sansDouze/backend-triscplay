import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserStatus } from './user-status.entity';

export interface StatusInterface{
    id_status: number;
    name: String;
}

@Injectable()
export class StatusService {
    constructor(
        @InjectRepository(UserStatus)
        private readonly statusRepo: Repository<StatusInterface>
    ) {}

    async findAll(): Promise<StatusInterface[]> {
            const userStatus = await this.statusRepo.find();
            return userStatus;
        }
    
    async findOne(id_status: number): Promise<StatusInterface> {
            const userStatus = await this.statusRepo.findOneBy({ id_status })
    
            if (!userStatus) throw new NotFoundException(`Utilisateur ${id_status} introuvable`);
    
            return userStatus;
        }

    async create(name: String): Promise<StatusInterface> {
            const newStatus = await this.statusRepo.save({ name });
    
            return newStatus;
        }

    async updateStatus(id_status: number, name: string): Promise <StatusInterface> {
            const userStatus = await this.findOne(id_status);
    
            userStatus.name = name;
    
            await this.statusRepo.save(userStatus);
    
            return userStatus;
        }
}