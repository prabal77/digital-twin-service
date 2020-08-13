import { Test, TestingModule } from '@nestjs/testing';
import { ShellHttpCommandController } from './shell-http-command.controller';

describe('ShellHttpCommand Controller', () => {
  let controller: ShellHttpCommandController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShellHttpCommandController],
    }).compile();

    controller = module.get<ShellHttpCommandController>(ShellHttpCommandController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
