import { handlers } from '../handlers';
import { container } from '../inversify.config';
import { TYPES } from '../types';

export function setupHandlers() {
  for (const clazz of handlers) {
    const handler = new clazz(container.get(TYPES.EventBusService));
    handler.handle();
  }
}
