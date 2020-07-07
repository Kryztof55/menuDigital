import * as actionType from '../actions/actionTypes';

export const drinksReducer = (state = [], action) => {
    switch (action.type) {
        case actionType.GET_DRINKS:
            return {
                ...state,
                drinks: action.drinks,
            };
        default:
            return state;
    }
};
