import 'reflect-metadata';

import { Container } from 'inversify';

import { AuthService } from './services/auth.service';
import { EventBusService } from './services/event-bus.service';
import { IAuthService, TYPES } from './types';
import { IEventBusService } from './types/interfaces/event-bus.service';

export const container = new Container();

container
  .bind<IEventBusService>(TYPES.EventBusService)
  .toConstantValue(new EventBusService());

container.bind<IAuthService>(TYPES.AuthService).to(AuthService);
