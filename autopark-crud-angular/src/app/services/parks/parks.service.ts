import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Park } from '../../models/park.model';

@Injectable({
  providedIn: 'root'
})
export class ParksService {

  private prefix: string = 'park';

  constructor(
    private api: ApiService
  ) { }

  public parks(page: number | string, limit: number | string) {
    return this.api.get(`${this.prefix}s?page=${page}&limit=${limit}`);
  }

  public create(park: Park) {
    return this.api.post(`${this.prefix}`, park);
  }
}
