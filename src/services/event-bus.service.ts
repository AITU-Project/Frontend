import { injectable } from 'inversify';
import { Observable, Subject } from 'rxjs';

import { filterEventByType } from '../hooks/filterEventByType';
import { AppEvent, AppEventType } from '../types';
import { IEventBusService } from '../types/interfaces/event-bus.service';

@injectable()
export class EventBusService implements IEventBusService {
  private readonly subject = new Subject<never>();

  pushEvent<T>(event: AppEvent<T>) {
    this.subject.next(event as never);
  }

  onEvent<T>(): Observable<AppEvent<T>> {
    return this.subject.asObservable();
  }

  onEventType<T>(type: AppEventType): Observable<AppEvent<T>> {
    return this.subject.asObservable().pipe(filterEventByType<T>(type));
  }
}
