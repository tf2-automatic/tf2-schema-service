import { BadRequestException } from '@nestjs/common';
import { ParseCronPipe } from './parse-cron.pipe';

describe('ParseCronPipe', () => {
  it('should be defined', () => {
    expect(new ParseCronPipe()).toBeDefined();
  });

  it('should fail with invalid cron', () => {
    const target = new ParseCronPipe();

    expect(() => {
      target.transform('abc123');
    }).toThrowError(BadRequestException);
  });

  it('should succeed with valid cron', () => {
    const target = new ParseCronPipe();

    const value = '0 * * * *';

    expect(target.transform(value)).toBe(value);
  });
});
