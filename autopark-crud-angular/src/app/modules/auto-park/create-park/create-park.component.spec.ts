import { HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MatSnackBarModule, MAT_DIALOG_DATA } from '@angular/material';
import { provideMockStore } from '@ngrx/store/testing';
import { CreateParkComponent } from './create-park.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('CreateParkComponent', () => {
  let component: CreateParkComponent;
  let fixture: ComponentFixture<CreateParkComponent>;
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
      declarations: [ CreateParkComponent ],
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
    fixture = TestBed.createComponent(CreateParkComponent);
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
