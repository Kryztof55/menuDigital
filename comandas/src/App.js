import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Search from './components/search';
import CardMesa from './components/cardMesa';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(2),
    },
}));

const MesasActive = [
    {
        id: 1,
        status: 'red',
    },
    {
        id: 2,
        status: 'green',
    },
    {
        id: 3,
        status: 'yellow',
    },
    {
        id: 4,
        status: 'green',
    },
    {
        id: 5,
        status: 'yellow',
    },
    {
        id: 6,
        status: 'red',
    },
];

function App() {
    const classes = useStyles();
    return (
        <Container className={classes.root} maxWidth="md">
            <Search />
            <Grid container spacing={2}>
                {MesasActive.map((item, index) => {
                    return (
                        <Grid key={item.id} item xs={12} sm={4}>
                            <CardMesa number={item.id} />
                        </Grid>
                    );
                })}
            </Grid>
        </Container>
    );
}

export default App;
