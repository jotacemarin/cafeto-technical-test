import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { VehiclesService } from './vehicles.service';

describe('VehiclesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ]
  }));

  it('should be created', () => {
    const service: VehiclesService = TestBed.get(VehiclesService);
    expect(service).toBeTruthy();
  });
});
