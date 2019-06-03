import React from 'react';


//Material UI
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
// import CssBaseline from '@material-ui/core/CssBaseline';

import { ThemeProvider } from '@material-ui/styles';
import Toolbar from '@material-ui/core/Toolbar';

import Container from '@material-ui/core/Container';

import { Nav } from './Nav';
import { Jumbotron } from './Jumbotron';

import './App.css';


let theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

theme = responsiveFontSizes(theme);


function App(props) {
  return (
    <div className="portfolio">
      <ThemeProvider theme={theme}>
        {/* <CssBaseline /> */}
        {/* < */}
          <Nav />
        {/* </ElevationScroll> */}
        <Toolbar />
        <Jumbotron/>
        <Container>
          {[...new Array(12)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
            )
            .join('\n')}
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
