export interface ValidatorInterface<T> {
  validate(value: T, another?: T): string[];
}

export enum ValidationType {
  Email = 'email',
  Password = 'password',
  NotEmpty = 'not-empty',
  Matches = 'matches',
}

export type ValidatorFunction<T> = (value: T, another?: T) => string[];
