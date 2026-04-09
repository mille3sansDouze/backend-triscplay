import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserTypeOrm } from './user.entity';
import * as bcrypt from 'bcrypt';

export interface User {
    id_user: string;
    email: string;
    id_name: string;
    user_name: string;
    password: string;
    profile_pic_url: string;
    description: string;
}

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserTypeOrm)
        private readonly userRepo: Repository<UserTypeOrm>
    ) {}

    async findAll(): Promise<User[]> {
        const users = await this.userRepo.find();
        return users;
    }

    async findOne(id_user: string): Promise<User> {
        const user = await this.userRepo.findOneBy({ id_user })

        if (!user) throw new NotFoundException(`Utilisateur ${id_user} introuvable`);

        return user;
    }

    async create(email: string, id_name: string, user_name: string, password: string, profile_pic_url: string, description: string): Promise<User> {
        const hashed = await bcrypt.hash(password, 10);
        const newUser = await this.userRepo.save({ email, id_name, user_name, password: hashed, profile_pic_url, description, id_status: 1 });

        return newUser;
    }

    async updateDescription(id_user: string, description: string): Promise <User> {
        const user = await this.findOne(id_user);

        user.description = description;

        await this.userRepo.save(user);

        return user;
    }

    async remove(id_user: string): Promise<void> {
        await this.userRepo.delete({ id_user })
    }

    async validateUser(email: string, password: string) {
        const user = await this.userRepo.findOne({ where: { email } });
        if (!user) return null;

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return null;

        const { password: _, ...result } = user;
        return result;
    }
}
