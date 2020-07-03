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
    const promotions = useSelector(
        (state) => state.promotionsReducer.promotions
    );

    useEffect(() => {
        dispatch(actions.getBreakfast());
        dispatch(actions.getMeal());
        dispatch(actions.getDinner());
        dispatch(actions.getPromotions());
        content();
    }, []);
    const [detailId, setDetailId] = useState(props.location.state);
    const [typeFood, setTypeFood] = useState([]);

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
        }
    };
    const desayunos = [
        {
            id: 1,
            imgUrl: '/img/paella.jpg',
            name: 'Nombre de desayuno',
            price: 330,
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            id: 2,
            imgUrl: '/img/paella.jpg',
            name: 'Nombre de desayuno',
            price: 330,
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            id: 3,
            imgUrl: '/img/paella.jpg',
            name: 'Nombre de desayuno',
            price: 330,
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            id: 4,
            imgUrl: '/img/paella.jpg',
            name: 'Nombre de desayuno',
            price: 330,
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
    ];
    const comidas = [
        {
            id: 1,
            imgUrl: '/img/paella.jpg',
            name: 'Nombre de comida',
            price: 330,
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            id: 2,
            imgUrl: '/img/paella.jpg',
            name: 'Nombre de comida',
            price: 330,
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            id: 3,
            imgUrl: '/img/paella.jpg',
            name: 'Nombre de comida',
            price: 330,
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            id: 4,
            imgUrl: '/img/paella.jpg',
            name: 'Nombre de comida',
            price: 330,
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
    ];
    const cenas = [
        {
            id: 1,
            imgUrl: '/img/paella.jpg',
            name: 'Nombre de cena',
            price: 330,
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            id: 2,
            imgUrl: '/img/paella.jpg',
            name: 'Nombre de cena',
            price: 330,
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            id: 3,
            imgUrl: '/img/paella.jpg',
            name: 'Nombre de cena',
            price: 330,
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            id: 4,
            imgUrl: '/img/paella.jpg',
            name: 'Nombre de cena',
            price: 330,
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
    ];
    const promociones = [
        {
            id: 1,
            imgUrl: '/img/paella.jpg',
            name: 'Tipo de promo 2x1',
            price: 330,
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            id: 2,
            imgUrl: '/img/paella.jpg',
            name: 'Tipo de promo 2x1',
            price: 330,
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            id: 3,
            imgUrl: '/img/paella.jpg',
            name: 'Tipo de promo 2x1',
            price: 330,
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            id: 4,
            imgUrl: '/img/paella.jpg',
            name: 'Tipo de promo 2x1',
            price: 330,
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
    ];

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
                            addToOrder="Agregar a orden"></FoodCard>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};
export default connect((state) => state)(PageDetails);
