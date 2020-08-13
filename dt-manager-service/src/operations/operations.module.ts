import { Module } from '@nestjs/common';
import { ShellHttpCommandController } from './controllers/shell-http-command/shell-http-command.controller';

@Module({
  controllers: [ShellHttpCommandController]
})
export class OperationsModule {}
