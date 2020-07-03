import { combineReducers } from 'redux';
import { hightlightReducer } from './hightlights';
import { breakfastReducer } from './breakfast';
import { mealReducer } from './meal';
import { dinnerReducer } from './dinner';
import { promotionsReducer } from './promotions';
import { postDishesReducer } from './postDishes';
export default combineReducers({
    hightlightReducer,
    breakfastReducer,
    mealReducer,
    dinnerReducer,
    promotionsReducer,
    postDishesReducer,
});
