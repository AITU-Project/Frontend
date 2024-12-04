import validator from 'validator';
import { ValidatorInterface } from '../types/validator.types';

export class NotEmpty implements ValidatorInterface<string> {
  validate(value: string): string[] {
    return !validator.isEmpty(value) ? [] : ['Поле не должно быть пустым!'];
  }
}
