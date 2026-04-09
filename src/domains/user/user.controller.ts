import {
  Controller, Get, Post, Patch, Delete,
  Param, Body, UnauthorizedException, Headers,
  UseGuards
} from '@nestjs/common';
import { UserService } from './user.service';
import { SessionService } from '../../technical/session/session.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { SessionGuard } from 'src/common/guards/session.guard';
import { CurrentUser } from 'src/common/decorators/current-user.decorator';

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
  @UseGuards(SessionGuard)
  checkSession() {
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
  @UseGuards(SessionGuard)
  async logout(@CurrentUser() userId: string) {
    await this.sessionService.deleteSession(userId);
    return { message: 'Déconnecté avec succès' };
  }

  @Patch(':id')
  @UseGuards(SessionGuard)
  update(
    @Param('id') id_user: string,
    @CurrentUser() userId: string,
    @Body() body: { description: string },
  ) {
    if (id_user !== userId) throw new UnauthorizedException('Action non autorisée');
    return this.userService.updateDescription(id_user, body.description);
  }

  @Delete(':id')
  @UseGuards(SessionGuard)
  remove(
    @Param('id') id_user: string,
    @CurrentUser() userId: string,
  ) {
    if (id_user !== userId) throw new UnauthorizedException('Action non autorisée');
    return this.userService.remove(id_user);
  }
}