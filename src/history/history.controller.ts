import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { HistoryService } from './history.service';
import { History } from './history.entity';
import { CreateHistoryDto } from './dto/create-history.dto';

@Controller('history')
export class HistoryController {
  constructor(private readonly historyService: HistoryService) {}

  @Get()
  findAll(): Promise<History[]> {
    return this.historyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<History[]> {
    return this.historyService.findOne(id);
  }

  @Post()
  async create(@Body() createHistoryDto: CreateHistoryDto): Promise<History> {
    return this.historyService.create(createHistoryDto);
  }

  @Delete(':taskId')
  async deleteByTaskId(@Param('taskId') taskId: number): Promise<void> {
    await this.historyService.deleteByTaskId(taskId);
  }
}
