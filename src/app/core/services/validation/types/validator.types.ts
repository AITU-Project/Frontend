export interface ValidatorInterface<T> {
  validate(value: T): string[];
}

export enum ValidationType {
  Email = 'email',
  Password = 'password',
}

export type ValidatorFunction<T> = (value: T) => string[];
