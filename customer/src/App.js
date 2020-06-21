import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
} from 'react-router-dom';
import NavBottom from '../src/components/navBottom';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { makeStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';
import TopBar from '../src/components/topBar';
import Grid from '@material-ui/core/Grid';
import CardHightlight from '../src/components/cardHightlights';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
/* pages */
import PageDetails from '../src/pages/details';

const theme = createMuiTheme({
    palette: {
        primary: {
            // Purple and green play nicely together.
            main: purple[500],
        },
        secondary: {
            // This is green.A700 as hex.
            main: '#11cb5f',
        },
    },
});
const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(10),
    },
}));
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

const App = () => {
    let history = useHistory();
    const classes = useStyles();

    function handleClick() {
        console.log('roure');
    }
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <TopBar></TopBar>
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
                                    onClick={handleClick}>
                                    <CardHightlight
                                        imgUrl={item.imgUrl}
                                        title={item.title}
                                        hightlight={item.hightlight}
                                        description={
                                            item.description
                                        }></CardHightlight>
                                </Grid>
                            );
                        })}
                    </Grid>
                </Container>

                <NavBottom></NavBottom>
            </ThemeProvider>
        </div>
    );
};

export default App;
