import * as actionType from '../actions/actionTypes';

export const breakfastReducer = (state = [], action) => {
    switch (action.type) {
        case actionType.GET_BREAKFAST:
            return {
                ...state,
                breakfast: action.breakfast,
            };
        default:
            return state;
    }
};
