import validator from 'validator';
import { ValidatorInterface } from '../types/validator.types';

export class EmailValidator implements ValidatorInterface<string> {
  validate(value: string): string[] {
    return validator.isEmail(value) ? [] : ['Введите настоящую почту!'];
  }
}
