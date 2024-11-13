import { injectable } from 'inversify';

import { AbstractHandler, AppEventType, TestEventPayload } from '../types';

@injectable()
export class CustomHandler extends AbstractHandler {
  handle(): void {
    this.eventBusService
      .onEventType<TestEventPayload>(AppEventType.TestEvent)
      .subscribe((event) => {
        console.log(`Event ${event.type}`);
      });
  }
}
