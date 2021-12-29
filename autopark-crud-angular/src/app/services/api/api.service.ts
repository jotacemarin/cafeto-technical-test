import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const { protocol, host, port, basePath } = environment.endpoint;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private api: string = `${protocol}://${host}:${port}/${basePath}`;

  constructor(
    private http: HttpClient
  ) { }

  public get(endpoint: string) {
    return this.http.get(`${this.api}/${endpoint}`);
  }

  public post(endpoint: string, body: any) {
    return this.http.post(`${this.api}/${endpoint}`, body);
  }

  public put(endpoint: string, body: any) {
    return this.http.put(`${this.api}/${endpoint}`, body);
  }

  public remove(endpoint: string) {
    return this.http.delete(`${this.api}/${endpoint}`);
  }
}
