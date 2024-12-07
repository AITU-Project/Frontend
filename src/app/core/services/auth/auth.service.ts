import { inject, Injectable } from '@angular/core';
import { APIService } from '../api/api.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly api = inject(APIService);

  login(email: string, password: string) {
    return this.api.post('/users/', { email, password });
  }

  logout() {
    console.log('log out');
  }

  isAuthenticated() {
    return !!localStorage.getItem('token');
  }
}
