export class CreateHistoryDto {
    readonly id: string;
    readonly taskId: number;
    readonly changeType: string;
    readonly changeDescription: string;
    readonly timestamp: string;
  }