import { Action } from '@ngrx/store';
import { Park } from '../../models/park.model';

export enum VehiclesActionsType {
  INIT_CHANGE = '[VEHICLES] init change vehicles',
  CHANGE_SUCCESSFULLY = '[VEHICLES] change vehicles successfully',
  CHANGE_FAILED = '[VEHICLES] change vehicles failed'
}

export class InitChangeVehicles implements Action {
  readonly type = VehiclesActionsType.INIT_CHANGE;
  constructor(readonly park_id: string, readonly page: number, readonly limit: number) { }
}

export class SuccessChangeVehicles implements Action {
  readonly type = VehiclesActionsType.CHANGE_SUCCESSFULLY;
  constructor(readonly payload: Array<Park>, readonly page: number, readonly limit: number) { }
}

export class FailedChangeVehicles implements Action {
  readonly type = VehiclesActionsType.CHANGE_FAILED;
  constructor(readonly payload: any) { }
}

export type VehiclesActions = InitChangeVehicles | SuccessChangeVehicles | FailedChangeVehicles;
