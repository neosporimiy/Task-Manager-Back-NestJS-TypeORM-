import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './task/tasks.module';
import { BoardModule } from './board/board.module';
import { HistoryModule } from './history/history.module';

@Module({
  imports: [TasksModule, BoardModule, HistoryModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'account1',
      password: 'account1',
      database: 'test2',
      autoLoadEntities: true,
      synchronize: true,
    }),
    
  ],
})
export class AppModule {}
