import React from 'react';
import NavBottom from '../src/components/navBottom'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { purple } from '@material-ui/core/colors';
import TopBar from '../src/components/topBar'

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
const  App = () => {
  return (
    <div className="App">
       <ThemeProvider theme={theme}>
          <TopBar></TopBar>
          <NavBottom></NavBottom>
       </ThemeProvider>
    </div>
  );
}

export default App;
