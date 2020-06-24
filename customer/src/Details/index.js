import React, { useState } from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { purple } from '@material-ui/core/colors';
import TopBar from '../components/topBar';
import { Router, Switch, Route } from 'react-router-dom';
const PageDetails = (props) => {
    const [detailId, setDetailId] = useState(props.location.state);

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
    return (
        <ThemeProvider theme={theme}>
            <p>{`Test ${detailId}`}</p>
        </ThemeProvider>
    );
};
export default PageDetails;
