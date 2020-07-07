import * as actionTypes from './actionTypes';

const getHightlights = () => {
    return async (dispatch) => {
        try {
            const res = await fetch('http://localhost:8000/hightlights');
            const hightlights = await res.json();
            dispatch({
                type: actionTypes.GET_HIGHTLIGHTS,
                hightlights,
            });
        } catch (e) {
            console.error(e);
        }
    };
};

const getBreakfast = () => {
    return async (dispatch) => {
        try {
            const res = await fetch('http://localhost:8001/desayunos');
            const breakfast = await res.json();
            dispatch({
                type: actionTypes.GET_BREAKFAST,
                breakfast,
            });
        } catch (e) {
            console.error(e);
        }
    };
};
const getMeal = () => {
    return async (dispatch) => {
        try {
            const res = await fetch('http://localhost:8001/comidas');
            const meal = await res.json();
            dispatch({
                type: actionTypes.GET_MEAL,
                meal,
            });
        } catch (e) {
            console.error(e);
        }
    };
};
const getDinner = () => {
    return async (dispatch) => {
        try {
            const res = await fetch('http://localhost:8001/cenas');
            const dinner = await res.json();
            dispatch({
                type: actionTypes.GET_DINNER,
                dinner,
            });
        } catch (e) {
            console.error(e);
        }
    };
};

const getPromotions = () => {
    return async (dispatch) => {
        try {
            const res = await fetch('http://localhost:8001/promociones');
            const promotions = await res.json();
            dispatch({
                type: actionTypes.GET_PORMOTIONS,
                promotions,
            });
        } catch (e) {
            console.error(e);
        }
    };
};
const postDishes = (dishes) => {
    return {
        type: actionTypes.POST_DISHES_TO_STATE,
        dishes,
    };
};
export {
    getHightlights,
    getBreakfast,
    getMeal,
    getDinner,
    getPromotions,
    postDishes,
};
