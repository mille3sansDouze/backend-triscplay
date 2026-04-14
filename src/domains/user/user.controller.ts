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
import { Roles } from 'src/common/decorators/roles.decorator';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { CurrentUserRole } from 'src/common/decorators/current-user-role.decorator';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CurrentSession } from 'src/common/decorators/current-session.decorator';

@ApiTags('Users')
@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly sessionService: SessionService,
  ) {}

  //Routes statiques GET
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get('check-session')
  @ApiBearerAuth('session-id')
  @UseGuards(SessionGuard)
  checkSession() {
    return { valid: true };
  }

  @Get('admin/all')
  @ApiBearerAuth('session-id')
  @UseGuards(SessionGuard, RolesGuard)
  @Roles('admin')
  findAllAdmin() {
    return this.userService.findAll();
  }

  //Routes statiques POST
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

    const session = await this.sessionService.createSession(user.id_user, user.role);//Ajout de role pour les Guards

    return {
      session_id: session.session_id,
      expire_at: session.expire_at,
      user,
    };
  }

  @Post('logout')
  @ApiBearerAuth('session-id')
  @UseGuards(SessionGuard)
  async logout(@CurrentSession() session_id: string) {
    await this.sessionService.deleteSession(session_id);
    return { message: 'Déconnecté avec succès' };
  }

  //Routes Dynamiques
  @Get(':id')
  findOne(@Param('id') id_user: string) {
    return this.userService.findOne(id_user);
  }

  @Patch(':id')
  @ApiBearerAuth('session-id')
  @UseGuards(SessionGuard)
  update(
    @Param('id') id_user: string,
    @CurrentUser() userId: string,
    @CurrentUserRole() userRole: string,
    @Body() body: UpdateUserDto,
  ){
  const isOwner = id_user === userId;
  const isAdmin = userRole === 'admin';

  if (!isOwner && !isAdmin) throw new UnauthorizedException('Action non autorisée');
  return this.userService.update(id_user, body);
}

  @Delete(':id')
  @ApiBearerAuth('session-id')
  @UseGuards(SessionGuard)
  remove(
    @Param('id') id_user: string,
    @CurrentUser() userId: string,
    @CurrentUserRole() userRole: string,
  ){
  const isOwner = id_user === userId;
  const isAdmin = userRole === 'admin';

  if (!isOwner && !isAdmin) throw new UnauthorizedException('Action non autorisée');
  return this.userService.remove(id_user);
}
}