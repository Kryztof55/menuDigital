import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import history from '../history';
import Grid from '@material-ui/core/Grid';
import CardHightlight from '../components/cardHightlights';
import Container from '@material-ui/core/Container';
import * as actions from '../actions/actions';
import { useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(10),
    },
}));
const handleClick = (id) => {
    history.push({
        pathname: '/Details',
        state: id,
    });
};
const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actions.getHightlights());
    }, []);
    const classes = useStyles();
    const hightlights = useSelector(
        (state) => state.hightlightReducer.hightlights
    );
    if (!hightlights) {
        return <h1>Cargando...</h1>;
    }
    return (
        <Container maxWidth="md" className={classes.container}>
            <Grid container spacing={3}>
                {hightlights.map((item, index) => {
                    return (
                        <Grid
                            item
                            key={item.id}
                            xs={12}
                            sm={6}
                            md={3}
                            onClick={() => handleClick(item.id)}>
                            <CardHightlight
                                imgUrl={item.imgUrl}
                                title={item.title}
                                hightlight={item.hightlight}
                                description={item.description}></CardHightlight>
                        </Grid>
                    );
                })}
            </Grid>
        </Container>
    );
};
export default Home;
