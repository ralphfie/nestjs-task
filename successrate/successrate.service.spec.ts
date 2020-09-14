import { Test, TestingModule } from '@nestjs/testing';
import { SuccessrateService } from './successrate.service';

describe('SuccessrateService', () => {
  let service: SuccessrateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SuccessrateService],
    }).compile();

    service = module.get<SuccessrateService>(SuccessrateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
