import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QualityDto } from './dto/save-schema-qualities.dto';
import { Repository } from 'typeorm';
import { Quality } from './models/quality.entity';

@Injectable()
export class QualityService {
  constructor(
    @InjectRepository(Quality)
    private readonly qualityRepository: Repository<Quality>,
  ) {}

  async saveQualities(qualities: QualityDto[]): Promise<void> {
    await this.qualityRepository.save(this.qualityRepository.create(qualities));
  }

  getAllQualities(): Promise<Quality[]> {
    return this.qualityRepository.find({
      order: {
        id: 'ASC',
      },
    });
  }

  getQualityById(id: number): Promise<Quality> {
    return this.qualityRepository.findOne(id);
  }

  getQualityByName(name: string): Promise<Quality> {
    return this.qualityRepository
      .createQueryBuilder()
      .select()
      .where({
        name,
      })
      .getOne();
  }
}
