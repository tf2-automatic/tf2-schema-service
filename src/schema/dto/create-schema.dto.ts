import { Type } from 'class-transformer';
import { IsObject } from 'class-validator';
import {
  IsArray,
  IsBoolean,
  IsDefined,
  IsInt,
  IsString,
  ValidateNested,
} from 'class-validator';

class ItemDto {
  @IsDefined()
  @IsString()
  readonly name: string;

  @IsDefined()
  @IsInt()
  readonly defindex: number;

  @IsDefined()
  @IsString()
  readonly item_class: string;

  @IsDefined()
  @IsString()
  readonly item_type_name: string;

  @IsDefined()
  @IsString()
  readonly item_name: string;

  @IsDefined()
  @IsBoolean()
  readonly proper_name: boolean;

  @IsDefined()
  @IsString()
  readonly item_slot: string;

  @IsDefined()
  @IsInt()
  readonly item_quality: number;

  @IsDefined()
  @IsInt()
  readonly min_ilevel: number;

  @IsDefined()
  @IsInt()
  readonly max_ilevel: number;

  @IsDefined()
  @IsString()
  readonly image_url: string;

  @IsDefined()
  @IsString()
  readonly image_url_large: string;

  @IsDefined()
  @IsObject()
  readonly capabilities: { [key: string]: string };

  @IsDefined()
  @IsString({
    each: true,
  })
  readonly used_by_classes: string[];
}

export class CreateSchemaDto {
  @IsDefined()
  @IsArray()
  @ValidateNested({
    each: true,
  })
  @Type(() => ItemDto)
  readonly items: ItemDto[];
}
