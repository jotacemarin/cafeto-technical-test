import { HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MatSnackBarModule, MAT_DIALOG_DATA } from '@angular/material';
import { provideMockStore } from '@ngrx/store/testing';
import { CreateVehicleComponent } from './create-vehicle.component';

describe('CreateVehicleComponent', () => {
  let component: CreateVehicleComponent;
  let fixture: ComponentFixture<CreateVehicleComponent>;
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
      declarations: [ CreateVehicleComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      imports: [
        HttpClientModule,
        MatDialogModule,
        MatSnackBarModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      providers: [
        provideMockStore({ initialState }),
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateVehicleComponent);
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
