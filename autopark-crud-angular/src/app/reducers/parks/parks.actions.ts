import { Action } from '@ngrx/store';
import { Park } from '../../models/park.model';

export enum ParksActionsType {
  INIT_CHANGE = '[PARKS] init change parks',
  CHANGE_SUCCESSFULLY = '[PARKS] change parks successfully',
  CHANGE_FAILED = '[PARKS] change parks failed'
}

export class InitChangeParks implements Action {
  readonly type = ParksActionsType.INIT_CHANGE;
  constructor(readonly page: number, readonly limit: number) { }
}

export class SuccessChangeParks implements Action {
  readonly type = ParksActionsType.CHANGE_SUCCESSFULLY;
  constructor(readonly payload: Array<Park>, readonly page: number, readonly limit: number) { }
}

export class FailedChangeParks implements Action {
  readonly type = ParksActionsType.CHANGE_FAILED;
  constructor(readonly payload: any) { }
}

export type ParksActions = InitChangeParks | SuccessChangeParks | FailedChangeParks;
