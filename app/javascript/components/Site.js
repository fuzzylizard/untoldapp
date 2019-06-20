import React from "react";
import { Container, Typography } from '@material-ui/core';

class Site extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Container maxWidth="lg">
          <Typography variant="h2">
            Your Stories
          </Typography>
        </Container>
      </React.Fragment>
    );
  }
}

export default Site
