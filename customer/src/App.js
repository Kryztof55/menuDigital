import React from 'react';
import Routes from '../src/Routes';
import NavBottom from '../src/components/navBottom';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { indigo } from '@material-ui/core/colors';
import TopBar from '../src/components/topBar';

const theme = createMuiTheme({
    palette: {
        primary: {
            // Purple and green play nicely together.
            main: '#f59e11',
        },
        secondary: {
            // This is green.A700 as hex.
            main: '#ffc059',
        },
    },
});

const App = () => {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <TopBar></TopBar>
                <Routes />
                <NavBottom></NavBottom>
            </ThemeProvider>
        </div>
    );
};

export default App;
