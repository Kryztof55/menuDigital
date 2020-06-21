import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { purple } from '@material-ui/core/colors';
import TopBar from '../components/topBar';

const PageDetails = () => {
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
            <TopBar></TopBar>
        </ThemeProvider>
    );
};
export default PageDetails;
