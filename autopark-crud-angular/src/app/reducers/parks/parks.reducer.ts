import { ParksActions, ParksActionsType } from './parks.actions';
import { Park } from '../../models/park.model';

export interface ParksState {
  page: number;
  limit: number;
  parks: Array<Park>;
}

export const initialState: ParksState = {
  page: 0,
  limit: 0,
  parks: []
};

export function parksReducer(state = initialState, action: ParksActions): ParksState {
  switch (action.type) {
    case ParksActionsType.INIT_CHANGE:
      return { ...state };
    case ParksActionsType.CHANGE_SUCCESSFULLY:
        const { page, limit } = action;
      return { ...state, page, limit, parks: action.payload };
    case ParksActionsType.CHANGE_FAILED:
      return { ...state };
    default:
      return state;
  }
}
