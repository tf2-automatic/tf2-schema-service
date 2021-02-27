import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Queue } from 'bull';
import { Repository } from 'typeorm';
import { CreateSchemaDto } from './dto/create-schema.dto';
import { Item } from './models/item.entity';

@Injectable()
export class SchemaService {
  constructor(
    @InjectRepository(Item)
    private itemRepository: Repository<Item>,
    @InjectQueue('schema')
    private schemaQueue: Queue,
  ) {}

  async enqueueSchema(): Promise<void> {
    const jobId = 'schema';

    const oldJob = await this.schemaQueue.getJob(jobId);

    if (oldJob?.finishedOn !== undefined) {
      try {
        await oldJob.remove();
      } catch (error) {}
    }

    await this.schemaQueue.add(
      {
        jobId,
      },
      {
        jobId: jobId,
        attempts: 3,
        backoff: {
          type: 'exponential',
          delay: 5000,
        },
      },
    );
  }

  async saveSchema(schema: CreateSchemaDto): Promise<void> {
    await this.itemRepository.save(this.itemRepository.create(schema.items));
  }

  getItemByDefindex(defindex: number): Promise<Item> {
    return this.itemRepository.findOne({
      where: {
        defindex,
      },
    });
  }
}
