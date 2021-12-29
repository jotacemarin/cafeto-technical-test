import { parks } from "./parks.actions";

const initialState = {
    loadingParks: false,
    parks: []
};

function parksReducer (state = initialState, action) {
    switch (action.type) {
        case parks.INIT_CHANGE:
            return { ...state, loadingParks: true };
        case parks.CHANGE_SUCCESS: 
            return { ...state, parks: action.parks, loadingParks: false };
        case parks.CHANGE_FAILED:
            return { ...state, loadingParks: false };
        default:
            return state;
    }
}

export  default parksReducer;
