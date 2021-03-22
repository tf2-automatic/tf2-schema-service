import { IsCron } from '../../common/decorator/validation/IsCron';

export class EnqueueRepeatingSchemaDto {
  @IsCron()
  readonly cron: string;
}
