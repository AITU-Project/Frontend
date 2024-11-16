import { AppEventType } from '../enums/events.enum';

export interface AppEvent<PayloadType> {
  type: AppEventType;
  payload: PayloadType;
}
