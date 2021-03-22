import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { CreateSchemaDto } from './dto/create-schema.dto';
import { EnqueueRepeatingSchemaDto } from './dto/enqueue-repeating-schema.dto';
import { EnqueueSchemaDto } from './dto/enqueue-schema.dto';
import { SchemaService } from './schema.service';

@Controller('schema')
export class SchemaController {
  constructor(private readonly schemaService: SchemaService) {}

  @Post('refresh')
  async enqueueSchema(
    @Body(new ValidationPipe()) input: EnqueueSchemaDto,
  ): Promise<{
    enqueued: boolean;
  }> {
    await this.schemaService.enqueueSchema(input.start ?? 0);

    return {
      enqueued: true,
    };
  }

  @Post('repeating')
  async enqueueRepeatingSchema(
    @Body(new ValidationPipe()) input: EnqueueRepeatingSchemaDto,
  ): Promise<{
    enqueued: boolean;
  }> {
    await this.schemaService.enqueueRepeatingSchema(input.cron);

    return {
      enqueued: true,
    };
  }

  @Post('repeating')
  async removeRepeatingSchema(): Promise<{
    removed: boolean;
  }> {
    await this.schemaService.removeRepeatingSchema();

    return {
      removed: true,
    };
  }

  @Post()
  async saveSchema(
    @Body(new ValidationPipe()) createSchema: CreateSchemaDto,
  ): Promise<void> {
    await this.schemaService.saveSchema(createSchema);
  }
}
