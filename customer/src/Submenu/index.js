import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import * as actions from '../actions/actions';
import CardHightlight from '../components/cardHightlights';
import history from '../history';
import { useDispatch, useSelector, connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(10),
    },
}));

const SubMenu = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const drinks = useSelector((state) => state.drinksReducer.drinks);
    useEffect(() => {
        dispatch(actions.getDrinks());
    }, []);
    const list = drinks;
    const handleMenu = (type) => {
        history.push({
            pathname: '/Details',
            state: type,
        });
    };
    if (!drinks) {
        return <h1>Cargando...</h1>;
    }
    return (
        <Container maxWidth="md" className={classes.container}>
            <Grid container spacing={3}>
                {list?.map((element, index) => {
                    return (
                        <Grid
                            item
                            key={index}
                            xs={6}
                            sm={6}
                            md={3}
                            onClick={() => handleMenu(element.type)}>
                            <CardHightlight
                                imgUrl={element.imgUrl}
                                title={element.type}
                                hightlight={element.type}></CardHightlight>
                        </Grid>
                    );
                })}
            </Grid>
        </Container>
    );
};
export default connect((state) => state)(SubMenu);
