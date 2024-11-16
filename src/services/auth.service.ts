import { injectable } from 'inversify';

import { IAuthService } from '../types';

@injectable()
export class AuthService implements IAuthService {
  async login(username: string, password: string): Promise<object> {
    console.log(`Send request with ${username} and ${password}`);
    return {};
  }
}
