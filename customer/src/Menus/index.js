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
const PageMenu = (props) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const entradas = useSelector((state) => state.entradasReducer.entradas);
    const ensaladas = useSelector((state) => state.ensaladasReducer.ensaladas);
    const aperitivos = useSelector(
        (state) => state.aperitivosReducer.aperitivos
    );
    const postres = useSelector((state) => state.postresReducer.postres);

    let type = props.location.state;
    const [typeFood, setTypeFood] = useState([]);
    console.log(type);
    useEffect(() => {
        dispatch(actions.getEntradas());
        dispatch(actions.getEnsaladas());
        dispatch(actions.getAperitivos());
        dispatch(actions.getPlatillos());
        dispatch(actions.getPostres());
        content(type);
        console.log(type);
    }, [type]);

    const content = () => {
        console.log('entraSwitch');
        switch (type) {
            case 'Entradas':
                return setTypeFood(entradas);
            case 'Ensaladas':
                return setTypeFood(ensaladas);
            case 'Aperitivos':
                return setTypeFood(aperitivos);
            case 'Postres':
                return setTypeFood(postres);
        }
    };

    return (
        <Container maxWidth="md" className={classes.container}>
            <Grid container spacing={3}>
                {typeFood?.map((item, index) => (
                    <Grid item key={item.id} xs={12} sm={6} md={3}>
                        <FoodCard
                            nombrePlatillo={item.name}
                            costoPlatillo={`$${item.price}`}
                            imgUrl={item.imgUrl}
                            title={item.name}
                            description={item.description}
                            addToOrder="Agregar a orden"
                            isAdded={item.isAdded}></FoodCard>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};
export default connect((state) => state)(PageMenu);