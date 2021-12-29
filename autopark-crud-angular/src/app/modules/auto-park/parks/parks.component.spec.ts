import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatIconModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { ParksComponent } from './parks.component';

describe('ParksComponent', () => {
  let component: ParksComponent;
  let fixture: ComponentFixture<ParksComponent>;
  const initialState = {
    parks: {
      page: 0,
      limit: 0,
      parks: []
    },
    vehicles: {
      page: 0,
      limit: 0,
      vehicles: []
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParksComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      imports: [
        MatIconModule,
        MatDialogModule,
        RouterTestingModule
      ],
      providers: [
        provideMockStore({ initialState })
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should instantiate', () => {
    expect(component).toBeDefined();
  });
});
