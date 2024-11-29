import { Injectable } from '@angular/core';
import {
  ValidationType,
  ValidatorFunction,
  ValidatorInterface,
} from './types/validator.types';
import { EmailValidator } from './validators/email.validator';
import { PasswordValidator } from './validators/password.validator';

@Injectable({ providedIn: 'root' })
export class ValidationService {
  private readonly validators: Map<ValidationType, ValidatorInterface<never>> =
    new Map([
      [ValidationType.Email, new EmailValidator()],
      [ValidationType.Password, new PasswordValidator()],
    ]);

  manage<T>(type: ValidationType): ValidatorFunction<T> {
    const validator = this.validators.get(type) as ValidatorInterface<T>;
    if (validator) return validator.validate;
    else throw new Error('Validator is not set.');
  }

  validate<T>(type: ValidationType, value: T): string[] {
    const validator = this.validators.get(type) as ValidatorInterface<T>;
    return validator ? validator.validate(value) : ['Unknown validation type.'];
  }
}
