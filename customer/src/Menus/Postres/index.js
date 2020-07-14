import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import FoodCard from '../../components/cards';
import * as actions from '../../actions/actions';
import { useDispatch, useSelector, connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(10),
    },
}));
const MenuPostres = (props) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const postres = useSelector(
        (state) => state.postresReducer.postres
    );
    useEffect(() => {
        dispatch(actions.getPostres());
    }, []);
    if (!postres) {
        return <h1>Cargando...</h1>;
    }
    return (
        <Container maxWidth="md" className={classes.container}>
            <Grid container spacing={3}>
                {postres?.map((item, index) => (
                    <Grid item key={item.id} xs={12} sm={6} md={3}>
                        <FoodCard
                            nombrePlatillo={item.name}
                            costoPlatillo={item.price}
                            imgUrl={item.imgUrl}
                            title={item.name}
                            description={item.description}
                            addToOrder="Agregar a orden"
                            isAdded={item.isAdded}
                            id={item.id}></FoodCard>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};
export default connect((state) => state)(MenuPostres);
