import { Type } from 'class-transformer';
import {
  IsArray,
  IsDefined,
  IsInt,
  IsString,
  ValidateNested,
} from 'class-validator';

export class QualityDto {
  @IsInt()
  readonly id: number;

  @IsString()
  readonly name: string;
}

export class SaveSchemaQualitiesDto {
  @IsDefined()
  @IsArray()
  @ValidateNested({
    each: true,
  })
  @Type(() => QualityDto)
  readonly qualities: QualityDto[];
}
