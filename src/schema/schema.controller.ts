import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { SaveSchemaItemsDto } from './dto/save-schema-items.dto';
import { SchemaService } from './schema.service';

@Controller('schema')
export class SchemaController {
  constructor(private readonly schemaService: SchemaService) {}

  @Post('items')
  async saveSchema(
    @Body(new ValidationPipe()) createSchema: SaveSchemaItemsDto,
  ): Promise<void> {
    await this.schemaService.saveSchemaItems(createSchema);
  }
}
