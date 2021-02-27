import { Type } from 'class-transformer';
import { IsObject, IsOptional } from 'class-validator';
import {
  IsArray,
  IsBoolean,
  IsDefined,
  IsInt,
  IsString,
  ValidateNested,
} from 'class-validator';

export class ItemDto {
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

  @IsOptional()
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

  @IsOptional()
  @IsString()
  readonly image_url: string;

  @IsOptional()
  @IsString()
  readonly image_url_large: string;

  @IsDefined()
  @IsObject()
  readonly capabilities: { [key: string]: string };

  @IsOptional()
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
