import { combineReducers } from 'redux';
import parksReducer from './parks/parks.reducer';
import vehiclesReducer from './vehicles/vehicles.reducer';

export default combineReducers({
    parks: parksReducer,
    vehicles: vehiclesReducer
});
