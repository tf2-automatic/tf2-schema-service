import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from './models/item.entity';
import { Repository } from 'typeorm';
import { ItemDto } from '../schema/dto/create-schema.dto';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(Item)
    private itemRepository: Repository<Item>,
  ) {}

  getItemByDefindex(defindex: number): Promise<Item> {
    return this.itemRepository.findOne({
      where: {
        defindex,
      },
    });
  }

  getItemsByItemName(itemName: string): Promise<Item[]> {
    return this.itemRepository.find({
      where: {
        item_name: itemName,
      },
    });
  }

  async saveItems(items: ItemDto[]): Promise<void> {
    await this.itemRepository.save(this.itemRepository.create(items));
  }
}
