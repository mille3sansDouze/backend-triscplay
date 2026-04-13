import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../decorators/roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<string[]>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()],
    );

    if (!requiredRoles || requiredRoles.length === 0) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const userRole = request.userRole;

    if (!userRole) {
      throw new ForbiddenException('Utilisateur non authentifié');
    }

    const hasRole = requiredRoles.includes(userRole)

    if (!hasRole) {
      throw new ForbiddenException(
        `Accès refusé. Rôle(s) requis : ${requiredRoles.join(', ')}. ` +
          `Vos rôles : ${userRole}.`,
      );
    }

    return true;
  }
}

//Permet de vérifier si un utilisateur de l'API est authentifié ou non pour les routes qui ont besoin d'un rôle
//et laisse passer tout le monde sur les routes publiques.