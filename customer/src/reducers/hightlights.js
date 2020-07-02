import * as actionType from '../actions/actionTypes';

export const hightlightReducer = (state = [], action) => {
    switch (action.type) {
        case actionType.GET_HIGHTLIGHTS:
            return {
                ...state,
                hightlights: action.hightlights,
            };
        default:
            return state;
    }
};
