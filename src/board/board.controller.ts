import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { BoardService } from './board.service';
import { Board } from './board.entity';
import { UpdateBoardDto } from './dto/update-board.dto';

@Controller('boards')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Get()
  findAll(): Promise<Board[]> {
    return this.boardService.findAll();
  }

  @Post()
  create(@Body() createBoardDto: any): Promise<Board> {
    return this.boardService.create(createBoardDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatedData: UpdateBoardDto): Promise<Board> {
    return this.boardService.update(id, updatedData);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Board> {
    return this.boardService.findOne(id);
  }

}
