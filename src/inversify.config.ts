import 'reflect-metadata';

import { Container } from 'inversify';

import { EventBusService } from './services/event-bus.service';
import { TYPES } from './types';

export const container = new Container();

container.bind<EventBusService>(TYPES.EventBusService).to(EventBusService);
