export class CreateTaskDto {
    readonly id: number;
    readonly boardId: string;    
    readonly name: string;
    readonly description: string;
    readonly dueDate: string;
    readonly priority: string;
    readonly columnId: string;    
  }

  