import { IsInt, IsOptional, IsPositive } from 'class-validator';

export class EnqueueSchemaDto {
  @IsOptional()
  @IsInt()
  @IsPositive()
  readonly start?: number;
}
