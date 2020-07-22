import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import FoodCard from '../components/cards';
import * as actions from '../actions/actions';
import { useDispatch, useSelector, connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(10),
    },
}));
let typeFood = '';
const PageDetails = (props) => {
    const dispatch = useDispatch();
    const classes = useStyles();

    let detailId = props.location.state;
    //const [typeFood, setTypeFood] = useState([]);
    useEffect(() => {
        dispatch(actions.getBreakfast());
        dispatch(actions.getMeal());
        dispatch(actions.getDinner());
        dispatch(actions.getPromotions());
        dispatch(actions.getPlatillos());
        content(detailId);
    }, [detailId]);
    const breakfast = useSelector((state) => state.breakfastReducer.breakfast);
    const meal = useSelector((state) => state.mealReducer.meal);
    const dinner = useSelector((state) => state.dinnerReducer.dinner);
    const drinks = useSelector((state) => state.drinksReducer.drinks);
    const dishes = useSelector((state) => state.postDishesReducer.dishes);
    const platillos = useSelector((state) => state.platillosReducer.platillos);
    const promotions = useSelector(
        (state) => state.promotionsReducer.promotions
    );
    let number = 0;
    let name = '';
    if (!dishes) {
        console.log('no dishes');
        //;
    } else {
        number = dishes[dishes.length - 1].number;
    }
    const content = () => {
        switch (detailId) {
            case 1:
                return (typeFood = breakfast);
            case 2:
                return (typeFood = meal);
            case 3:
                return (typeFood = dinner);
            case 4:
                return (typeFood = promotions);
            case 'Refrescos':
                if (drinks.length) {
                    return (typeFood = drinks[0].list);
                }
                break;
            case 'Cervezas':
                if (drinks.length) {
                    return (typeFood = drinks[1].list);
                }
                break;
            case 'Café':
                if (drinks.length) {
                    return (typeFood = drinks[2].list);
                }
                break;
            case 'Jugos':
                if (drinks.length) {
                    return (typeFood = drinks[3].list);
                }
                break;
            case 'Vinos':
                if (drinks.length) {
                    return (typeFood = drinks[4].list);
                }
                break;
            case 'Cortes':
                if (platillos.length) {
                    return (typeFood = platillos[0].list);
                }
                break;
            case 'Mariscos':
                if (platillos.length) {
                    return (typeFood = platillos[1].list);
                }
                break;
            case 'Vegetarianos':
                if (platillos.length) {
                    return (typeFood = platillos[2].list);
                }
                break;
            case 'Pastas':
                if (platillos.length) {
                    return (typeFood = platillos[3].list);
                }
                break;
            case 'Pizzas':
                if (platillos.length) {
                    return (typeFood = platillos[4].list);
                }
                break;
            default:
                return undefined;
        }
    };
    if (typeFood == undefined) {
        //
        content(detailId);
    }
    if (!typeFood) {
        return <h1>Cargando...</h1>;
    }
    return (
        <Container maxWidth="md" className={classes.container}>
            <Grid container spacing={3}>
                {typeFood.map((item, index) => (
                    <Grid item key={item.id} xs={12} sm={6} md={3}>
                        <FoodCard
                            nombrePlatillo={item.name}
                            costoPlatillo={item.price}
                            imgUrl={item.imgUrl}
                            title={item.name}
                            description={item.description}
                            addToOrder="Agregar a orden"
                            isAdded={item.isAdded}
                            number={number}
                            id={item.id}
                            hasOptions={item.options}
                            optionsContent={item.optionsContent}></FoodCard>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};
export default connect((state) => state)(PageDetails);
