import { Injectable } from '@angular/core';
import {
  ValidationType,
  ValidatorFunction,
  ValidatorInterface,
} from './types/validator.types';
import { EmailValidator } from './validators/email.validator';
import { PasswordValidator } from './validators/password.validator';
import { NotEmpty } from './validators/not-empty.validator';
import { MatchesValidator } from './validators/matches.validator';

@Injectable({ providedIn: 'root' })
export class ValidationService {
  private readonly validators: Map<
    ValidationType,
    ValidatorInterface<unknown>
  > = new Map([
    [ValidationType.Email, new EmailValidator()],
    [ValidationType.Password, new PasswordValidator()],
    [ValidationType.NotEmpty, new NotEmpty()],
    [ValidationType.Matches, new MatchesValidator()],
  ]);

  manage<T>(type: ValidationType): ValidatorFunction<T> {
    const validator = this.validators.get(type) as ValidatorInterface<T>;
    if (validator) return validator.validate;
    else throw new Error('Validator is not set.');
  }

  validate<T>(type: ValidationType, value: T, another?: T): string[] {
    const validator = this.validators.get(type) as ValidatorInterface<T>;
    return validator
      ? validator.validate(value, another)
      : ['Unknown validation type.'];
  }
}
