import {
  Controller,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { ItemService } from './item.service';
import { Item } from './models/item.entity';

@Controller('items')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Get('/:defindex')
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
