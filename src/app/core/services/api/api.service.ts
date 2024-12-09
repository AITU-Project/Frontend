import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

export interface HeadersOptions {
  authorization: string;
}

type HttpClientHeaders = {
  [header: string]: string | string[];
};

@Injectable({ providedIn: 'root' })
export class APIService {
  private readonly http: HttpClient = inject(HttpClient);
  private readonly link = environment.link;

  get<T>(path: string, options?: HeadersOptions) {
    const headers: HttpClientHeaders = {};

    if (options?.authorization) {
      headers['Authorization'] = `Bearer ${options.authorization}`;
    }

    return this.http.get<T>(this.link + path, { headers });
  }

  post<T>(path: string, body: object, options?: HeadersOptions) {
    const headers: HttpClientHeaders = { 'Content-Type': 'application/json' };

    if (options?.authorization) {
      headers['Authorization'] = `Bearer ${options.authorization}`;
    }

    return this.http.post<T>(this.link + path, body, { headers });
  }
}
