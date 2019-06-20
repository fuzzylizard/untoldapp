import React from "react";
import { Container, Typography } from '@material-ui/core';

class Home extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Container maxWidth="lg">
          <Typography variant="h2">
            unTold
          </Typography>
          <Typography variant="body1">
            This is the outside front page for unTold. Sign in to see stuff :-)
          </Typography>
        </Container>
      </React.Fragment>
    );
  }
}

export default Home
