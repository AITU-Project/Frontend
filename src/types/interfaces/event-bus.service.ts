import { Observable } from 'rxjs';

import { AppEvent, AppEventType } from './app-events';

export interface IEventBusService {
  pushEvent<T>(event: AppEvent<T>): void;
  onEvent<T>(): Observable<AppEvent<T>>;
  onEventType<T>(type: AppEventType): Observable<AppEvent<T>>;
}
