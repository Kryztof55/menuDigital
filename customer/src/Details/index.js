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
const PageDetails = (props) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const breakfast = useSelector((state) => state.breakfastReducer.breakfast);
    const meal = useSelector((state) => state.mealReducer.meal);
    const dinner = useSelector((state) => state.dinnerReducer.dinner);
    const drinks = useSelector((state) => state.drinksReducer.drinks);
    const dishes = useSelector((state) => state.postDishesReducer.dishes);
    let number = 0;
    let name = '';
    if (!dishes) {
        console.log('no dishes');
        //;
    } else {
        number = dishes[dishes.length - 1].number;
    }

    const promotions = useSelector(
        (state) => state.promotionsReducer.promotions
    );
    let detailId = props.location.state;
    const [typeFood, setTypeFood] = useState([]);
    useEffect(() => {
        dispatch(actions.getBreakfast());
        dispatch(actions.getMeal());
        dispatch(actions.getDinner());
        dispatch(actions.getPromotions());
        content(detailId);
    }, [detailId]);
    const content = () => {
        switch (detailId) {
            case 1:
                return setTypeFood(breakfast);

            case 2:
                return setTypeFood(meal);

            case 3:
                return setTypeFood(dinner);

            case 4:
                return setTypeFood(promotions);
            case 'Refrescos':
                if (drinks.length) {
                    return setTypeFood(drinks[0].list);
                }
            case 'Cervezas':
                if (drinks.length) {
                    return setTypeFood(drinks[1].list);
                }
            case 'Café':
                if (drinks.length) {
                    return setTypeFood(drinks[2].list);
                }
            case 'Jugos':
                if (drinks.length) {
                    return setTypeFood(drinks[3].list);
                }
            case 'Vinos':
                if (drinks.length) {
                    return setTypeFood(drinks[4].list);
                }
        }
    };

    return (
        <Container maxWidth="md" className={classes.container}>
            <Grid container spacing={3}>
                {typeFood?.map((item, index) => (
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
                            id={item.id}></FoodCard>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};
export default connect((state) => state)(PageDetails);
