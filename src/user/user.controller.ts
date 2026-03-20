import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    findAll() {
        return this.userService.findAll();
    }

    @Post()
    create(@Body() body: CreateUserDto) {
        return this.userService.create(body.email, body.displayed_name, body.user_name, body.password, body.profile_pic_url, body.description);
    }

    @Patch(':id/description')
    update(@Param('id') id_user: string, @Body() body: { description: string }) {
        return this.userService.updateDescription(id_user, body.description);
    }

    @Delete(':id')
    remove(@Param('id') id_user: string) {
        return.this.userService.remove(id_user);
    }
}
