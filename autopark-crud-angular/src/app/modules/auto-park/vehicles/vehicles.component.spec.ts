import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatIconModule, MatBottomSheetModule, MAT_BOTTOM_SHEET_DATA } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { VehiclesComponent } from './vehicles.component';

describe('VehiclesComponent', () => {
  let component: VehiclesComponent;
  let fixture: ComponentFixture<VehiclesComponent>;
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
      declarations: [ VehiclesComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      imports: [
        MatIconModule,
        MatDialogModule,
        MatBottomSheetModule,
        RouterTestingModule
      ],
      providers: [
        provideMockStore({ initialState }),
        { provide: MAT_BOTTOM_SHEET_DATA, useValue: {} },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclesComponent);
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
