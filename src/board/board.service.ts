import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Board } from './board.entity';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';

@Injectable()
export class BoardService {
  constructor(
    @InjectRepository(Board)
    private readonly boardRepository: Repository<Board>,
  ) {}

  async findAll(): Promise<Board[]> {
    return this.boardRepository.find();
  }

  async create(createBoardDto: CreateBoardDto): Promise<Board> {
    return this.boardRepository.save(createBoardDto);
  }

  async update(boardId: string, updatedBoardDto: UpdateBoardDto): Promise<Board> {
    const boardToUpdate = await this.boardRepository.findOne({ where: { boardId } });
    if (!boardToUpdate) {
        throw new Error('Board not found');
      }
      Object.assign(boardToUpdate, updatedBoardDto);
      return this.boardRepository.save(boardToUpdate);
  }

  async findOne(boardId: string): Promise<Board | undefined> {
    return this.boardRepository.findOne({ where: { boardId } });
  }
}
