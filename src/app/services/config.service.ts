import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private config: any;

  constructor(private http: HttpClient) {}

  loadConfig() {
    return firstValueFrom(this.http.get('/config.json')).then((config) => {
      this.config = config;
    });
  }

  get(key: string) {
    return this.config ? this.config[key] : null;
  }
}
