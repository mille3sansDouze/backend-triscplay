import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { SessionService } from "src/technical/session/session.service";

@Injectable()
export class SessionGuard implements CanActivate {
  constructor(private readonly sessionService: SessionService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const session_id = request.headers['x-session-id'];

    if (!session_id) throw new UnauthorizedException('Session manquante');

    const session = await this.sessionService.validateSession(session_id);
    if (!session) throw new UnauthorizedException('Session invalide ou expirée');

    request.userId = session.id_user;
    return true;
  }
}

//Permet de centraliser la vérification de session au lieu de la recopier dans chaque route