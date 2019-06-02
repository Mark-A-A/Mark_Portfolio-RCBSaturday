import React from 'react';
import PropTypes from 'prop-types';

//Material UI
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { ThemeProvider } from '@material-ui/styles';
import purple from '@material-ui/core/colors/purple';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

import { Nav } from './Nav';

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


function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.node.isRequired,
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  window: PropTypes.func,
};

function App(props) {
  return (
    <div className="portfolio">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ElevationScroll {...props}>
          <Nav />
        </ElevationScroll>
        <Container>
          <Box my={2}>
            {/* <!--Hero--> */}
            <div class="section no-pad-bot hero-unit" id="index-banner">
              <div class="container">
                <h1 class="text_h center header cd-headline letters type">

                  <span class="cd-words-wrapper waiting ">

                    <b class="is-visible">Full Stack Developer</b>
                    <b>New Yorker</b>
                    <b>Lifelong Learner</b>
                    <b>Traveler</b>
                  </span>
                </h1>
              </div>
            </div>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
