import { inject, Injectable } from '@angular/core';
import { APIService } from '../api/api.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly api = inject(APIService);

  login(email: string, password: string) {
    return this.api.post('/auth/sign-in', { email, password });
  }

  save(token: string) {
    localStorage.setItem('token', token);
  }

  logout() {
    localStorage.removeItem('token');
  }

  isAuthenticated() {
    return !!localStorage.getItem('token');
  }
}
