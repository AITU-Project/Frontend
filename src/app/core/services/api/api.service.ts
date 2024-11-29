import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private readonly http: HttpClient = inject(HttpClient);

  get<T>(url: string) {
    return this.http.get<T>(url);
  }

  post<T>(url: string, body: object) {
    return this.http.post<T>(url, body);
  }
}
