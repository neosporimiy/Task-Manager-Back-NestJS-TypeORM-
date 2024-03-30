import { Test, TestingModule } from '@nestjs/testing';
import { TasksController } from './tasks.controller';
import { TaskService } from './task.service';

describe('TasksController', () => {
  let tasksController: TasksController;
  let tasksService: TaskService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TasksController],
      providers: [TaskService],
    }).compile();

    tasksController = module.get<TasksController>(TasksController);
    tasksService = module.get<TaskService>(TaskService);
  });

  it('should be defined', () => {
    expect(tasksController).toBeDefined();
  });
});
