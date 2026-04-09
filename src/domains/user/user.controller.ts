import {
  Controller, Get, Post, Patch, Delete,
  Param, Body, UnauthorizedException, Headers
} from '@nestjs/common';
import { UserService } from './user.service';
import { SessionService } from '../../technical/session/session.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly sessionService: SessionService,
  ) {}

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get('check-session')
    async checkSession(@Headers('x-session-id') session_id: string) {
    if (!session_id) throw new UnauthorizedException('Session manquante');
    
    const session = await this.sessionService.validateSession(session_id);
    if (!session) throw new UnauthorizedException('Session invalide ou expirée');

    return { valid: true };
  }


  @Get(':id')
  findOne(@Param('id') id_user: string) {
    return this.userService.findOne(id_user);
  }

  @Post()
  create(@Body() body: CreateUserDto) {
    return this.userService.create(body.email, body.id_name, body.user_name, body.password, body.profile_pic_url, body.description);
  }

  @Post('login')
  async login(@Body() body: LoginUserDto) {
    const user = await this.userService.validateUser(body.email, body.password);
    if (!user) {
      throw new UnauthorizedException('Email ou mot de passe incorrect');
    }

    const session = await this.sessionService.createSession(user.id_user);

    return {
      session_id: session.session_id,
      expire_at: session.expire_at,
      user,
    };
  }

  @Post('logout')
  async logout(@Headers('x-session-id') session_id: string) {
    if (!session_id) throw new UnauthorizedException('Session manquante');
    await this.sessionService.deleteSession(session_id);
    return { message: 'Déconnecté avec succès' };
  }

  @Patch(':id')
  update(@Param('id') id_user: string, @Body() body: { description: string }) {
    return this.userService.updateDescription(id_user, body.description);
  }

  @Delete(':id')
  remove(@Param('id') id_user: string) {
    return this.userService.remove(id_user);
  }
}