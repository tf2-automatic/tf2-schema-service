import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EffectDto } from './dto/save-effects.dto';
import { Effect } from './models/effect.model';

@Injectable()
export class EffectService {
  constructor(
    @InjectRepository(Effect)
    private readonly effectRepository: Repository<Effect>,
  ) {}

  async save(effects: EffectDto[]): Promise<void> {
    await this.effectRepository.save(this.effectRepository.create(effects));
  }

  getAll(): Promise<Effect[]> {
    return this.effectRepository.find({
      order: {
        id: 'ASC',
      },
    });
  }

  getById(id: number): Promise<Effect> {
    return this.effectRepository.findOne(id);
  }

  getByName(name: string): Promise<Effect[]> {
    return this.effectRepository
      .createQueryBuilder()
      .select()
      .where({
        name,
      })
      .execute();
  }
}
