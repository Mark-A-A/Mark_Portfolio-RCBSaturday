import React from 'react';

import Typist from 'react-typist';
import TypistLoop from 'react-typist-loop'

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import "./Jumbotron.scss"

export function Jumbotron(props) {

  const phrase1 = "Full Stack Developer"
  const phrase2 = "New Yorker"
  const phrase3 = "Lifelong Learner"
  const phrase4 = "Traveler"
  const phrases = [phrase1, phrase2, phrase3, phrase4]
  return (
    <Box className="jumbotron-box">
      <section className="jumbotron">
        <Typography variant="h2" className="jumbotron-phrase">
          <TypistLoop interval={1000}>
            {
              phrases.map((text) => {
                return <Typist key={text} startDelay={750}>
                  {text}
                </Typist>
              })
            }
          </TypistLoop>
        
        </Typography>
        
      </section>
    </Box>
  );
}

