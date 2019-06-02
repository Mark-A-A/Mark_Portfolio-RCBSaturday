import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Fab from '@material-ui/core/Fab';


import { FaFile, FaUserTie, FaListUl, FaBookOpen, FaBasketballBall, FaMailBulk } from 'react-icons/fa';

import { useNavStyles } from './NavStyles'


export function Nav(props) {
  const classes = useNavStyles();
  console.log(classes)
  return (
    <React.Fragment>
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

    </React.Fragment >
  );
}