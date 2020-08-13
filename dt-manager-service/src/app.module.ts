import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonModule } from './common/common.module';
import { OperationsModule } from './operations/operations.module';
import { QueriesModule } from './queries/queries.module';

@Module({
  imports: [CommonModule, OperationsModule, QueriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
