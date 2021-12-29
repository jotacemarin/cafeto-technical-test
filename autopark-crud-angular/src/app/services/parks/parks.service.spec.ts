import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { ParksService } from './parks.service';

describe('ParksService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ]
  }));

  it('should be created', () => {
    const service: ParksService = TestBed.get(ParksService);
    expect(service).toBeTruthy();
  });
});
