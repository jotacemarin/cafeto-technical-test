import { Component, OnInit } from '@angular/core';
import { MatBottomSheet, MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Vehicle } from '../../../models/vehicle.model';
import { JmcState, vehiclesSelector } from '../../../reducers';
import { InitChangeVehicles } from '../../../reducers/vehicles/vehicles.actions';
import { VehiclesState } from '../../../reducers/vehicles/vehicles.reducer';
import { ActionsComponent } from '../actions/actions.component';
import { CreateVehicleComponent } from '../create-vehicle/create-vehicle.component';

@Component({
  selector: 'jmc-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {

  private parkId: string = this.activatedRoute.snapshot.params['_id'];
  public vehicles: Array<Vehicle>

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<JmcState>,
    private bottomSheet: MatBottomSheet,
    private dialog: MatDialog,
  ) {
    this.stores();
  }

  ngOnInit() {
    this.getVehicles();
  }

  private stores() {
    this.store.select(vehiclesSelector).subscribe((vehiclesState: VehiclesState) => {
      this.vehicles = vehiclesState.vehicles;
      this.bottomSheet.dismiss();
    });
  }

  public getVehicles() {
    this.store.dispatch(new InitChangeVehicles(this.parkId, 1, 100));
  }

  public actions(vehicle: Vehicle) {
    const bottonSheet = this.bottomSheet.open(ActionsComponent, { data: { object: vehicle, parent: this.parkId } });
    bottonSheet.afterDismissed().subscribe(result => {
      this.getVehicles();
    });
  }

  public modal() {
    const modal = this.dialog.open(CreateVehicleComponent, { width: '400px', data: { parkId: this.parkId } });
    modal.afterClosed().subscribe(result => {
      if (result) {
        this.getVehicles();
      }
    });
  }

}
