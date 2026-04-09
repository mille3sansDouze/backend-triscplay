import { Controller, Get, Post, Patch, Param, Body } from '@nestjs/common';
import { StatusService } from './user-status.service';
import { CreateUserStatusDto } from './dto/create-user-status.dto';

@Controller('connexion')
export class UserStatusController {
    constructor(private readonly statusService: StatusService) {}
    @Get()
        findAll() {
            return this.statusService.findAll();
        }
    
    @Get(':id')
    findOne(@Param('id') id_status: number){
        return this.statusService.findOne(id_status);
    }
    
    @Post()
    create(@Body() body: CreateUserStatusDto) {
        return this.statusService.create(body.libelle);
    }
    
    @Patch(':id')
    update(@Param('id') id_status: number, @Body() body: { libelle: string }) {
        return this.statusService.updateStatus(id_status, body.libelle);
    }}
