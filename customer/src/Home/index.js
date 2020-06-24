import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import history from '../history';
import Grid from '@material-ui/core/Grid';
import CardHightlight from '../components/cardHightlights';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
/* hightlight Data change later */
const hightlightData = [
    {
        id: 1,
        imgUrl: '/img/paella.jpg',
        hightlight: 'Deasayunos',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        link: '/desayunos',
    },
    {
        id: 2,
        imgUrl: '/img/paella.jpg',
        hightlight: 'Comidas',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        link: '/comidas',
    },
    {
        id: 3,
        imgUrl: '/img/paella.jpg',
        hightlight: 'Cenas',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        link: '/cenas',
    },
    {
        id: 4,
        imgUrl: '/img/paella.jpg',
        hightlight: 'Promociones',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        link: '/Promociones',
    },
];
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
    const classes = useStyles();
    return (
        <Container maxWidth="md" className={classes.container}>
            <Typography variant="h6" gutterBottom>
                Destacados
            </Typography>
            <Grid container spacing={3}>
                {hightlightData.map((item, index) => {
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
