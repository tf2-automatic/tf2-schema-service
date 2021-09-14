import { Test, TestingModule } from '@nestjs/testing';
import { QualityController } from './quality.controller';
import { QualityService } from './quality.service';

describe('QualityController', () => {
  let controller: QualityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QualityController],
      providers: [
        {
          provide: QualityService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<QualityController>(QualityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
