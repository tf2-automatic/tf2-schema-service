import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import * as cronValidator from 'cron-validator';

@Injectable()
export class ParseCronPipe implements PipeTransform {
  transform(value: any) {
    if (cronValidator.isValidCron(value) !== true) {
      throw new BadRequestException('Invalid cron');
    }

    return value;
  }
}
