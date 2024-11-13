import { Observable } from 'rxjs';

import { AppEvent } from '../dtos/events.dto';
import { AppEventType } from '../enums/events.enum';

export interface IEventBusService {
  pushEvent<T>(event: AppEvent<T>): void;
  onEvent<T>(): Observable<AppEvent<T>>;
  onEventType<T>(type: AppEventType): Observable<AppEvent<T>>;
}
