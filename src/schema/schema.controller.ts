import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { CreateSchemaDto } from './dto/create-schema.dto';
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

  @Post()
  async saveSchema(
    @Body(new ValidationPipe()) createSchema: CreateSchemaDto,
  ): Promise<void> {
    await this.schemaService.saveSchema(createSchema);
  }
}
