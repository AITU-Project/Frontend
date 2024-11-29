import validator from 'validator';
import { ValidatorInterface } from '../types/validator.types';

export class PasswordValidator implements ValidatorInterface<string> {
  validate(value: string): string[] {
    return validator.isStrongPassword(value) ? [] : ['Введите сложный пароль!'];
  }
}
