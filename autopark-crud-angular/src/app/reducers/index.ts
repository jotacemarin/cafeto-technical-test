import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';
import { storeLogger } from 'ngrx-store-logger';
import { ParksState, parksReducer } from './parks/parks.reducer';
import { VehiclesState, vehiclesReducer } from './vehicles/vehicles.reducer';

export interface JmcState {
  parks: ParksState,
  vehicles: VehiclesState
}

export const reducers: ActionReducerMap<JmcState> = {
  parks: parksReducer,
  vehicles: vehiclesReducer
};

export function logger(reducer: ActionReducer<JmcState>) {
  return storeLogger()(reducer);
}

export const metaReducers: MetaReducer<JmcState>[] = !environment.production ? [storeFreeze, logger] : [];

const parksStateSelector = (state: JmcState) => state.parks;

export const parksSelector = createSelector(
  parksStateSelector,
  (state: ParksState) => state
);

const vehiclesStateSelector = (state: JmcState) => state.vehicles;

export const vehiclesSelector = createSelector(
  vehiclesStateSelector,
  (state: VehiclesState) => state
);
