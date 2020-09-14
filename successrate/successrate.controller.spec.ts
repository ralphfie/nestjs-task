import { Test, TestingModule } from '@nestjs/testing';
import { SuccessrateController } from './successrate.controller';

describe('SuccessrateController', () => {
  let controller: SuccessrateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SuccessrateController],
    }).compile();

    controller = module.get<SuccessrateController>(SuccessrateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
