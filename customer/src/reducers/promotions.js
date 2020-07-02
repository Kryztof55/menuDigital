import * as actionType from '../actions/actionTypes';

export const promotionsReducer = (state = [], action) => {
    switch (action.type) {
        case actionType.GET_PORMOTIONS:
            return {
                ...state,
                promotions: action.promotions,
            };
        default:
            return state;
    }
};
