import { combineReducers } from 'redux';
import { hightlightReducer } from './hightlights';
import { breakfastReducer } from './breakfast';
import { mealReducer } from './meal';
import { dinnerReducer } from './dinner';
import { promotionsReducer } from './promotions';
import { drinksReducer } from './drinks';
import { entradasReducer } from './entradas';
import { ensaladasReducer } from './ensaladas';
import { aperitivosReducer } from './aperitivos';
import { postresReducer } from './postres';
import { platillosReducer } from './platillos';
import { postDishesReducer } from './postDishes';
export default combineReducers({
    hightlightReducer,
    breakfastReducer,
    mealReducer,
    dinnerReducer,
    promotionsReducer,
    postDishesReducer,
    drinksReducer,
    entradasReducer,
    ensaladasReducer,
    aperitivosReducer,
    postresReducer,
    platillosReducer,
});
