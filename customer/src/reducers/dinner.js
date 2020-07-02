import * as actionType from '../actions/actionTypes';

export const dinnerReducer = (state = [], action) => {
    switch (action.type) {
        case actionType.GET_DINNER:
            return {
                ...state,
                dinner: action.dinner,
            };
        default:
            return state;
    }
};
