import { IEventBusService } from '../interfaces/event-bus.service';

export abstract class AbstractHandler {
  constructor(protected readonly eventBusService: IEventBusService) {}

  abstract handle(): void;
}
