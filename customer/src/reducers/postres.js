import * as actionType from '../actions/actionTypes';

export const postresReducer = (state = [], action) => {
    switch (action.type) {
        case actionType.GET_POSTRES:
            return {
                ...state,
                postres: action.postres,
            };
        default:
            return state;
    }
};
