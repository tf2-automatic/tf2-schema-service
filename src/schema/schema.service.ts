import { Injectable } from '@nestjs/common';
import { SaveSchemaItemsDto } from './dto/save-schema-items.dto';
import { ItemService } from '../item/item.service';

@Injectable()
export class SchemaService {
  constructor(
    private readonly itemService: ItemService,
  ) {}

  async saveSchemaItems(schema: SaveSchemaItemsDto): Promise<void> {
    await this.itemService.saveItems(schema.items);
  }
}
