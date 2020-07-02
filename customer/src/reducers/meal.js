import * as actionType from '../actions/actionTypes';
import initialState from './initialState';

export const mealReducer = (state = [], action) => {
    switch (action.type) {
        case actionType.GET_MEAL:
            return {
                ...state,
                meal: action.meal,
            };
        default:
            return state;
    }
};
