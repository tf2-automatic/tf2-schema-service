import { IsString } from 'class-validator';
import { IsCron } from '../../common/decorator/validation/IsCron';

export class EnqueueRepeatingSchemaDto {
  @IsString()
  @IsCron()
  readonly cron: string;
}
