import { injectable } from 'inversify';

@injectable()
export class EventBusService {
  test() {
    return 'Hello World';
  }
}
