import { AbstractHandler } from '../types';
import { Constructor } from '../types/utility.types';
import { CustomHandler } from './custom.handler';

export const handlers: Constructor<AbstractHandler>[] = [CustomHandler];
