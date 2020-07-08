import * as actionType from '../actions/actionTypes';

export const ensaladasReducer = (state = [], action) => {
    switch (action.type) {
        case actionType.GET_ENSALADAS:
            return {
                ...state,
                ensaladas: action.ensaladas,
            };
        default:
            return state;
    }
};
