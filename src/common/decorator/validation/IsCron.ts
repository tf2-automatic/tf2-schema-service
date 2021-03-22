import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

import * as cronValidator from 'cron-validator';

@ValidatorConstraint()
export class IsCronConstraint implements ValidatorConstraintInterface {
  validate(value: any) {
    return cronValidator.isValidCron(value);
  }
}

export function IsCron(
  validationOptions?: ValidationOptions,
): PropertyDecorator {
  // eslint-disable-next-line @typescript-eslint/ban-types
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: Object.assign(
        {
          message: propertyName + ' must be a valid cron expression',
        },
        validationOptions,
      ),
      constraints: [],
      validator: IsCronConstraint,
    });
  };
}
