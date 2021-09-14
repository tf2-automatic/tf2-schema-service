import { Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsDefined,
  IsInt,
  IsString,
  ValidateNested,
} from 'class-validator';

export class EffectDto {
  @IsString()
  readonly system: string;

  @IsInt()
  readonly id: number;

  @IsBoolean()
  readonly attach_to_rootbone: boolean;

  @IsString()
  readonly name: string;
}

export class SaveSchemaEffectsDto {
  @IsDefined()
  @IsArray()
  @ValidateNested({
    each: true,
  })
  @Type(() => EffectDto)
  readonly effects: EffectDto[];
}
