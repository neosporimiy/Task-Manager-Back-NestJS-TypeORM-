import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { History } from './history.entity';
import { CreateHistoryDto } from './dto/create-history.dto';

@Injectable()
export class HistoryService {
  constructor(
    @InjectRepository(History)
    private historyRepository: Repository<History>,
  ) {}

  async findAll(): Promise<History[]> {
    return this.historyRepository.find();
  }

  async findOne(taskId: number): Promise<History[]> {
    return this.historyRepository.find({ where: { taskId }});
  }

  async create(createHistoryDto: CreateHistoryDto): Promise<History> {
    const { id, taskId, changeType, changeDescription, timestamp } = createHistoryDto;
    const newHistory = this.historyRepository.create({
      id,
      taskId,
      changeType,
      changeDescription,
      timestamp,
    });
    return this.historyRepository.save(newHistory);
  }

  async deleteByTaskId(taskId: number): Promise<void> {
    await this.historyRepository.delete({ taskId });
  }

}
