import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Vehicle } from '../../models/vehicle.model';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  private prefix: string = 'vehicle';

  constructor(
    private api: ApiService
  ) { }

  public vehicles(park_id: string, page: number | string, limit: number | string) {
    return this.api.get(`${this.prefix}s/${park_id}?page=${page}&limit=${limit}`);
  }

  public create(vehicle: Vehicle) {
    return this.api.post(`${this.prefix}`, vehicle);
  }

  public remove(vehicle_id: string) {
    return this.api.remove(`${this.prefix}/${vehicle_id}`);
  }

  public update(vehicle_id: string, body: Vehicle) {
    return this.api.put(`${this.prefix}/${vehicle_id}`, body);
  }
}
