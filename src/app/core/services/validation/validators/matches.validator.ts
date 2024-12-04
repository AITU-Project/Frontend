import { ValidatorInterface } from '../types/validator.types';

export class MatchesValidator implements ValidatorInterface<string> {
  validate(value: string, another: string): string[] {
    return value === another ? [] : ['Пароли должны совпадать!'];
  }
}
