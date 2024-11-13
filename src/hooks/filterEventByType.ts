import { filter } from 'rxjs';

import { AppEvent, AppEventType } from '../types';

export function filterEventByType<T>(type: AppEventType) {
  return filter((event: AppEvent<T>) => event.type === type);
}
