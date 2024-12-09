import { inject, Injectable } from '@angular/core';
import { APIService } from '../api/api.service';
import { ConclusionResponse } from './docs.models';

@Injectable({ providedIn: 'root' })
export class DocsService {
  private readonly api = inject(APIService);

  findAll() {
    return this.api.get<ConclusionResponse>('/conclusions/');
  }
}
