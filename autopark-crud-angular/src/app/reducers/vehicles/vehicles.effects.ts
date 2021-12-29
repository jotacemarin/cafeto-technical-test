import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { VehiclesService } from '../../services/vehicles/vehicles.service';
import { SuccessChangeVehicles, VehiclesActionsType } from './vehicles.actions';

@Injectable()
export class VehiclesEffects {

  constructor (
    private actions: Actions,
    private vehiclesService: VehiclesService
  ) { }

  @Effect()
  vehicles = this.actions.pipe(
    ofType(VehiclesActionsType.INIT_CHANGE),
    mergeMap((action: any) => this.vehiclesService.vehicles(action.park_id, action.page, action.limit)
      .pipe(
        map((response: any) => new SuccessChangeVehicles(response, action.page, action.limit)),
        catchError((error: any) => {
          return of({ type: VehiclesActionsType.CHANGE_FAILED });
        })
      )
    )
  );
}
