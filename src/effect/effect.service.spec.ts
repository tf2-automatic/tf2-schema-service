import { Test, TestingModule } from '@nestjs/testing';
import { EffectService } from './effect.service';

describe('EffectService', () => {
  let service: EffectService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: EffectService,
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<EffectService>(EffectService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
