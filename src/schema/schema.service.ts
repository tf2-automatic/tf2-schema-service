import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import { CreateSchemaDto } from './dto/create-schema.dto';
import { ItemService } from '../item/item.service';

@Injectable()
export class SchemaService {
  constructor(
    @InjectQueue('schema')
    private readonly schemaQueue: Queue,
    private readonly itemService: ItemService,
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
    await this.itemService.saveItems(schema.items);
  }
}
