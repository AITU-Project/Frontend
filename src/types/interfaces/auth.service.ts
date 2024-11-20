import { CreateUserDTO } from '../dtos/auth.service.dtos';

export interface IAuthService {
  register(dto: CreateUserDTO): void;
  login(username: string, password: string): object;
}
