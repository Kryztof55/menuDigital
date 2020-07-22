import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Search from './components/search';
import CardMesa from './components/cardMesa';
import Modal from '@material-ui/core/Modal';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
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
        status: 'orange',
    },
    {
        id: 4,
        status: 'green',
    },
    {
        id: 5,
        status: 'orange',
    },
    {
        id: 6,
        status: 'red',
    },
];
const comanda = [
    {
        id: 1,
        imgUrl: '/img/arrachera.jpg',
        name: 'Arrachera',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        price: 320,
    },
    {
        id: 2,
        imgUrl: '/img/flan.jpg',
        name: 'Flan',
        price: 330,
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        isAdded: false,
    },
];
const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(2),
    },
    modalInt: {
        position: 'absolute',
        width: '80%',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        padding: 20,
        borderRadius: 10,
        backgroundColor: 'white',
        maxHeight: 500,
        overflowY: 'auto',
        '&:focus': {
            outline: 'none',
        },
    },
    buttonGrid: {
        marginTop: 20,
    },
    logo: {
        width: 200,
        marginRight: 10,
    },
}));
function App() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [mesa, setMesa] = useState(0);
    const handleOpen = (id) => {
        console.log(id);
        setOpen(true);
        setMesa(id);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Container className={classes.root} maxWidth="md">
            <div>
                <img className={classes.logo} src="/img/logo.png" alt="Logo" />
            </div>
            <Search />
            <Grid container spacing={2}>
                {MesasActive.map((item, index) => {
                    return (
                        <Grid
                            className={classes.card}
                            key={item.id}
                            item
                            xs={12}
                            sm={4}
                            onClick={() => handleOpen(item.id)}>
                            <CardMesa number={item.id} status={item.status} />
                        </Grid>
                    );
                })}
            </Grid>
            <Modal
                className="modal"
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description">
                <div className={classes.modalInt}>
                    <Typography variant="h5" gutterBottom>
                        Mesa {mesa}
                    </Typography>
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left">
                                        <Typography variant="h5" gutterBottom>
                                            Platillo
                                        </Typography>
                                    </TableCell>
                                    <TableCell align="right">
                                        <Typography variant="h5" gutterBottom>
                                            Cantidad
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {comanda.map((item, index) => (
                                    <TableRow key={index}>
                                        <TableCell component="th" scope="row">
                                            <Typography
                                                variant="h6"
                                                gutterBottom>
                                                {item.name}
                                            </Typography>
                                        </TableCell>
                                        <TableCell align="right">3</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Grid
                        className={classes.buttonGrid}
                        container
                        justify="center">
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleClose}>
                            Iniciar
                        </Button>
                    </Grid>
                </div>
            </Modal>
        </Container>
    );
}

export default App;
