import { inject, Injectable } from '@angular/core';
import { APIService } from '../api/api.service';

export interface SignUpDto {
  email: string;
  firstname: string;
  surname: string;
  password: string;
  role: string;
  region: string;
  sex: 'male' | 'female';
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly api = inject(APIService);

  get authenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  login(email: string, password: string) {
    return this.api.post('/auth/sign-in', { email, password });
  }

  register(dto: SignUpDto) {
    return this.api.post('/auth/sign-up/', { ...dto, name: dto.firstname });
  }

  save(token: string) {
    localStorage.setItem('token', token);
  }

  logout() {
    localStorage.removeItem('token');
  }
}
