import * as actionType from '../actions/actionTypes';

export const entradasReducer = (state = [], action) => {
    switch (action.type) {
        case actionType.GET_ENTRADAS:
            return {
                ...state,
                entradas: action.entradas,
            };
        default:
            return state;
    }
};
