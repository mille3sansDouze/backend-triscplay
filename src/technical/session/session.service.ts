import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Session } from './session.entity';

@Injectable()
export class SessionService {
  constructor(
    @InjectRepository(Session)
    private readonly sessionRepository: Repository<Session>,
  ) {}

  async createSession(user_id: string, role: string): Promise<Session> {
    const expire_at = new Date();
    expire_at.setDate(expire_at.getDate() + 7); // date exp a changer si besoin ^^
    const session = this.sessionRepository.create({ user_id, role, expire_at }); //Ajout de 'role' ici pour les Guards
    return this.sessionRepository.save(session);
  }

  async validateSession(session_id: string): Promise<Session | null> {
    const session = await this.sessionRepository.findOne({ where: { session_id } });
    if (!session) return null;
    if (session.expire_at < new Date()) {
      await this.sessionRepository.delete({ session_id });
      return null; 
    }
    return session;
  }

  async deleteSession(session_id: string): Promise<void> {
    await this.sessionRepository.delete({ session_id });
  }

  async deleteAllUserSessions(user_id: string): Promise<void> {
    await this.sessionRepository.delete({ user_id });
  }
}