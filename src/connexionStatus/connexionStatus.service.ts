import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ConnexionStatus } from './connexionStatus.entity';

export interface ConnexionInterface{
    id_connexion: number;
    libelle: String;
}

@Injectable()
export class ConnexionService {
    constructor(
        @InjectRepository(ConnexionStatus)
        private readonly connexionRepo: Repository<ConnexionInterface>
    ) {}

    async findAll(): Promise<ConnexionInterface[]> {
            const connexionStatus = await this.connexionRepo.find();
            return connexionStatus;
        }
    
    async findOne(id_connexion: number): Promise<ConnexionInterface> {
            const connexionStatus = await this.connexionRepo.findOneBy({ id_connexion })
    
            if (!connexionStatus) throw new NotFoundException(`Utilisateur ${id_connexion} introuvable`);
    
            return connexionStatus;
        }

    async create(libelle: String): Promise<ConnexionInterface> {
            const newStatus = await this.connexionRepo.save({ libelle });
    
            return newStatus;
        }

    async updateStatus(id_connexion: number, libelle: string): Promise <ConnexionInterface> {
            const connexionStatus = await this.findOne(id_connexion);
    
            connexionStatus.libelle = libelle;
    
            await this.connexionRepo.save(connexionStatus);
    
            return connexionStatus;
        }
}