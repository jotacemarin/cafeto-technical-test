import { HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatBottomSheetModule, MatDialogModule, MatDialogRef, MatListModule, MatSnackBarModule, MAT_BOTTOM_SHEET_DATA, MAT_DIALOG_DATA } from '@angular/material';
import { provideMockStore } from '@ngrx/store/testing';
import { ActionsComponent } from './actions.component';

describe('ActionsComponent', () => {
  let component: ActionsComponent;
  let fixture: ComponentFixture<ActionsComponent>;
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
      declarations: [ ActionsComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      imports: [
        HttpClientModule,
        MatListModule,
        MatDialogModule,
        MatSnackBarModule,
        MatBottomSheetModule,
      ],
      providers: [
        provideMockStore({ initialState }),
        { provide: MAT_BOTTOM_SHEET_DATA, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionsComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should instantiate', () => {
    expect(component).toBeDefined();
  });
});
