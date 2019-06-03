import React from 'react';
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import Fab from '@material-ui/core/Fab';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

import { FaFile, FaUserTie, FaListUl, FaBookOpen, FaBasketballBall, FaMailBulk } from 'react-icons/fa';

import { useNavStyles } from './NavStyles'

function ElevationScroll(props) {

  const { children } = props;

  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  const elev = trigger ? 6 : 0

  return React.cloneElement(children, {
    elevation: elev
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.node.isRequired,
};


export function Nav(props) {
  const classes = useNavStyles();
  // console.log(classes)
  // console.log(classes)
  return (
    <React.Fragment>
      <ElevationScroll {...props}>

        <AppBar className={classes.nav}>
          <Toolbar>
            <Typography variant="h6" className={classes.brandMark}>Mark Awai</Typography>

            <Tooltip title="About Me" aria-label="About Me">
              <Fab color="primary" className={classes.fab}>
                <FaUserTie />
              </Fab>
            </Tooltip>

            <Tooltip title="Skills" aria-label="Skills">
              <Fab color="primary" className={classes.fab}>
                <FaListUl />
              </Fab>
            </Tooltip>

            <Tooltip title="Portfolio" aria-label="Portfolio">
              <Fab color="primary" className={classes.fab}>
                <FaBookOpen />
              </Fab>
            </Tooltip>

            <Tooltip title="Interests" aria-label="Interests">
              <Fab color="primary" className={classes.fab}>
                <FaBasketballBall />
              </Fab>
            </Tooltip>

            <Tooltip title="Resume" aria-label="Resume">
              <Fab color="primary" className={classes.fab}>
                <FaFile />
              </Fab>
            </Tooltip>

            <Tooltip title="Contact" aria-label="Contact">
              <Fab color="primary" className={classes.fab}>
                <FaMailBulk />
              </Fab>
            </Tooltip>
          
          </Toolbar>
          
        </AppBar>

      </ElevationScroll>

    </React.Fragment >
  );
}