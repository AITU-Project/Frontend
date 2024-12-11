import { inject, Injectable } from '@angular/core';
import { APIService } from '../api/api.service';
import { SignInResponse, SignUpResponse, SignUpDto, User } from './auth.models';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly key = 'token';
  private readonly email = 'email';

  set inVerification(value: string | null) {
    if (value === null) {
      localStorage.removeItem(this.email);
    } else {
      localStorage.setItem(this.email, value);
    }
  }

  get inVerification(): boolean {
    return !!localStorage.getItem(this.email);
  }

  private readonly api = inject(APIService);

  get hasKey(): boolean {
    return !!localStorage.getItem(this.key);
  }

  getToken(): string | null {
    return localStorage.getItem(this.key);
  }

  login(email: string, password: string) {
    return this.api.post<SignInResponse>('/auth/sign-in', { email, password });
  }

  register(dto: SignUpDto) {
    return this.api.post<SignUpResponse>('/auth/sign-up/', dto);
  }

  save(token: string) {
    localStorage.setItem(this.key, token);
  }

  logout() {
    localStorage.removeItem(this.key);
  }

  profile() {
    if (!this.hasKey) {
      return;
    }

    return this.api.get<{
      profile: { id: string; role: string };
      employee: { id: string };
    }>('/auth/profile/', {
      authorization: localStorage.getItem(this.key)!,
    });
  }

  verify(data: { code: string }) {
    if (!this.inVerification) {
      return;
    }

    return this.api.post<User>('/auth/verify/', {
      email: localStorage.getItem(this.email),
      code: data.code,
    });
  }
}
