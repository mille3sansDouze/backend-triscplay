import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    findAll() {
        return this.userService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id_user: string){
        return this.userService.findOne(id_user);
    }

    @Post()
    create(@Body() body: CreateUserDto) {
        return this.userService.create(body);
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
