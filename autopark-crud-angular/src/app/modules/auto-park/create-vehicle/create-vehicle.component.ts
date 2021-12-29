import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { Vehicle } from '../../../models/vehicle.model';
import { VehiclesService } from '../../../services/vehicles/vehicles.service';
import { CreateParkComponent } from '../create-park/create-park.component';

@Component({
  selector: 'jmc-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.scss']
})
export class CreateVehicleComponent implements OnInit {

  private parkId: string = this.data['parkId'];
  private vehicle: Vehicle = this.data['vehicle'];
  private vehicleForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<CreateParkComponent>,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private vehiclesService: VehiclesService
  ) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.vehicleForm = this.formBuilder.group({
      mark: [{ value: null, disabled: false}, [Validators.required]],
      model: [{ value: null, disabled: false}, [Validators.required]],
      relase_date: [{ value: null, disabled: false}, [Validators.required]],
      licence_plate: [{ value: null, disabled: false}, [Validators.required]],
      automotive_park: [{ value: null, disabled: false}, [Validators.required]],
      created_at: [{ value: null, disabled: false}, [Validators.required]],
      deleted: [{ value: false, disabled: false}, [Validators.required]]
    });
    if (this.vehicle) {
      this.vehicleForm.patchValue(this.vehicle);
    } else {
      this.vehicleForm.get('created_at').setValue(new Date().toISOString());
      this.vehicleForm.get('automotive_park').setValue(this.parkId);
    }
  }

  public close(result = null) {
    this.dialogRef.close(result);
  }

  public save() {
    let promise = null;
    if (this.vehicle) {
      promise = this.vehiclesService.update(this.vehicle._id, this.vehicleForm.getRawValue()).toPromise();
    } else {
      promise = this.vehiclesService.create(this.vehicleForm.getRawValue()).toPromise();
    }
    promise.then(response => this.close(response)).catch(error => this.snackBar.open(error.message));
  }

}
