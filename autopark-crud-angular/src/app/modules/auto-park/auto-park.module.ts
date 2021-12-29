import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatBottomSheetModule, MatButtonModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatSnackBarModule } from '@angular/material';
import { ActionsComponent } from './actions/actions.component';
import { AutoParkRoutingModule } from './auto-park-routing.module';
import { CreateParkComponent } from './create-park/create-park.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { ParksComponent } from './parks/parks.component';
import { VehiclesComponent } from './vehicles/vehicles.component';

@NgModule({
  declarations: [
    ParksComponent,
    VehiclesComponent,
    CreateParkComponent,
    CreateVehicleComponent,
    ActionsComponent
  ],
  imports: [
    CommonModule,
    AutoParkRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatBottomSheetModule
  ],
  entryComponents: [
    CreateParkComponent,
    CreateVehicleComponent,
    ActionsComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AutoParkModule { }
