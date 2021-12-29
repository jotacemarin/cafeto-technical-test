import { vehicles } from "./vehicles.actions";

const initialState = {
    loadingVehicles: false,
    vehicles: []
};

function vehiclesReducer (state = initialState, action) {
    switch (action.type) {
        case vehicles.INIT_CHANGE:
            return { ...state, loadingVehicles: true };
        case vehicles.CHANGE_SUCCESS: 
            return { ...state, vehicles: action.vehicles, loadingVehicles: false };
        case vehicles.CHANGE_FAILED:
            return { ...state, loadingVehicles: false};
        default:
            return state;
    }
}

export  default vehiclesReducer;
