import * as actionType from '../actions/actionTypes';

export const aperitivosReducer = (state = [], action) => {
    switch (action.type) {
        case actionType.GET_APERITIVOS:
            return {
                ...state,
                aperitivos: action.aperitivos,
            };
        default:
            return state;
    }
};
