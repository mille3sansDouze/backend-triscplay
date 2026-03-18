import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateTriscplayDto } from './dto/create-user.dto';
import { TriscplayService } from './triscplay.service';

@Controller('triscplay')
export class TriscplayController {
  constructor(private readonly triscplayService: TriscplayService) {}

  @Get()
  findAll() {
    return this.triscplayService.findAll();
  }

  @Post()
  create(@Body() body: CreateTriscplayDto) {
    return this.triscplayService.create(body.title, body.description);
  }

  @Patch(':id/status')
  update(@Param('id') id: string, @Body() body: { done: boolean }) {
    return this.triscplayService.updateStatus(id, body.done);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.triscplayService.remove(id);
  }
}