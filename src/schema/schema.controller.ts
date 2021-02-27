import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { CreateSchemaDto } from './dto/create-schema.dto';
import { SchemaService } from './schema.service';

@Controller('schema')
export class SchemaController {
  constructor(private readonly schemaService: SchemaService) {}

  @Post('refresh')
  async enqueueSchema(): Promise<{
    enqueued: boolean;
  }> {
    await this.schemaService.enqueueSchema();

    return {
      enqueued: true,
    };
  }

  @Get('/items/:defindex')
  async getItemByDefindex(
    @Param('defindex', new ParseIntPipe()) defindex: number,
  ) {
    const item = await this.schemaService.getItemByDefindex(defindex);

    if (!item) {
      throw new NotFoundException('Item not found');
    }

    return item;
  }

  @Post()
  async saveSchema(
    @Body(new ValidationPipe()) createSchema: CreateSchemaDto,
  ): Promise<void> {
    await this.schemaService.saveSchema(createSchema);
  }
}
