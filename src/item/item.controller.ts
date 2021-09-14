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
import { SaveSchemaItemsDto } from './dto/save-schema-items.dto';
import { ItemService } from './item.service';
import { Item } from './models/item.entity';

@Controller('items')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Post()
  saveItems(
    @Body(new ValidationPipe()) save: SaveSchemaItemsDto,
  ): Promise<void> {
    return this.itemService.saveItems(save.items);
  }

  @Get('/defindex/:defindex')
  async getItemByDefindex(
    @Param('defindex', new ParseIntPipe()) defindex: number,
  ) {
    const item = await this.itemService.getItemByDefindex(defindex);

    if (!item) {
      throw new NotFoundException('Item not found');
    }

    return item;
  }

  @Get('/name/:name')
  getItemsByItemName(@Param('name') name: string): Promise<Item[]> {
    return this.itemService.getItemsByItemName(name);
  }
}
