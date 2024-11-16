import 'reflect-metadata';

import { Container } from 'inversify';

import { EventBusService } from './services/event-bus.service';
import { TYPES } from './types';
import { IEventBusService } from './types/interfaces/event-bus.service';

export const container = new Container();

container
  .bind<IEventBusService>(TYPES.EventBusService)
  .toConstantValue(new EventBusService());
