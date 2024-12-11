import { inject, Injectable } from '@angular/core';
import { APIService } from '../api/api.service';
import { ConclusionResponse } from './docs.models';
import { AuthService } from '../auth/auth.service';

@Injectable({ providedIn: 'root' })
export class DocsService {
  private readonly api = inject(APIService);
  private readonly auth = inject(AuthService);

  findAll() {
    const token = this.auth.getToken();

    if (!token) {
      return;
    }

    return this.api.get<ConclusionResponse>('/conclusions/', {
      authorization: token,
    });
  }
}
