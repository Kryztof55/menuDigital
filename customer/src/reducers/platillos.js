import * as actionType from '../actions/actionTypes';

export const platillosReducer = (state = [], action) => {
    switch (action.type) {
        case actionType.GET_PLATILLOS:
            return {
                ...state,
                platillos: action.platillos,
            };
        default:
            return state;
    }
};
