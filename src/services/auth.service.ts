import axios from 'axios';
import { injectable } from 'inversify';

import { CreateUserDTO, IAuthService } from '../types';

@injectable()
export class AuthService implements IAuthService {
  async register(dto: CreateUserDTO) {
    const response = await axios.post('/users/', dto);

    console.log(response.data);
  }

  async login(username: string, password: string): Promise<object> {
    console.log(`Send request with ${username} and ${password}`);
    return {};
  }
}
