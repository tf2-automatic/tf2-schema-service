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

  async enqueueSchema(start: number): Promise<void> {
    await this.schemaQueue.add(
      {
        start: start,
      },
      {
        attempts: 3,
        backoff: {
          type: 'exponential',
          delay: 5000,
        },
      },
    );
  }

  async enqueueRepeatingSchema(cron: string): Promise<void> {
    await this.schemaQueue.add(
      {
        start: 0,
      },
      {
        jobId: 'repeating',
        repeat: {
          cron,
        },
      },
    );
  }

  async saveSchema(schema: CreateSchemaDto): Promise<void> {
    await this.itemService.saveItems(schema.items);
  }
}
