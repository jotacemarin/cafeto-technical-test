import { VehiclesActions, VehiclesActionsType } from './vehicles.actions';
import { Vehicle } from '../../models/vehicle.model';

export interface VehiclesState {
  page: number;
  limit: number;
  vehicles: Array<Vehicle>;
}

export const initialState: VehiclesState = {
  page: 0,
  limit: 0,
  vehicles: []
};

export function vehiclesReducer(state = initialState, action: VehiclesActions): VehiclesState {
  switch (action.type) {
    case VehiclesActionsType.INIT_CHANGE:
      return { ...state };
    case VehiclesActionsType.CHANGE_SUCCESSFULLY:
        const { page, limit } = action;
      return { ...state, page, limit, vehicles: action.payload['items'] };
    case VehiclesActionsType.CHANGE_FAILED:
      return { ...state, page: 0, limit: 0, vehicles: [] };
    default:
      return state;
  }
}
