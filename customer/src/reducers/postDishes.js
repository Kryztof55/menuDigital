import * as actionType from '../actions/actionTypes';

export const postDishesReducer = (state = [], action) => {
    switch (action.type) {
        case actionType.POST_DISHES_TO_STATE:
            return {
                ...state,
                dishes: action.dishes,
            };
        default:
            return state;
    }
};
