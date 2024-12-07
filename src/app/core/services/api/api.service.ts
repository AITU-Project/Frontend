import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class APIService {
  private readonly http: HttpClient = inject(HttpClient);
  private readonly link = environment.link;

  get<T>(path: string) {
    return this.http.get<T>(this.link + path);
  }

  post<T>(path: string, body: object) {
    return this.http.post<T>(this.link + path, body);
  }
}
