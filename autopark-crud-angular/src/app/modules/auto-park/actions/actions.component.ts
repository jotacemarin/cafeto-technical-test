import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar, MAT_BOTTOM_SHEET_DATA } from '@angular/material';
import { Store } from '@ngrx/store';
import { InitChangeVehicles } from 'src/app/reducers/vehicles/vehicles.actions';
import { JmcState } from '../../../reducers';
import { VehiclesService } from '../../../services/vehicles/vehicles.service';
import { CreateVehicleComponent } from '../create-vehicle/create-vehicle.component';

@Component({
  selector: 'jmc-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {

  public parent_id: string = this.data['parent'];
  public object: any = this.data['object'];

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private vehiclesService: VehiclesService,
    private store: Store<JmcState>,
  ) { }

  ngOnInit() { }

  public modal() {
    const modal = this.dialog.open(CreateVehicleComponent, { width: '400px', data: { vehicle: this.object, parkId: this.parent_id } });
    modal.afterClosed().subscribe(result => this.getVehicles());
  }

  public remove() {
    if (this.object._id) {
      this.vehiclesService.remove(this.object._id).toPromise()
      .then(response => this.getVehicles())
      .catch(error => this.snackBar.open(error.message));
    } else {
      this.snackBar.open('Something went wrong');
    }
  }

  public getVehicles() {
    this.store.dispatch(new InitChangeVehicles(this.parent_id, 1, 100));
  }

}
