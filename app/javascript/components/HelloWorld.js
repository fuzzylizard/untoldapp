import React from "react"
import PropTypes from "prop-types"
import { Container, Typography } from '@material-ui/core';

class HelloWorld extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Container maxWidth="lg">
          <Typography variant="h1">
            Greeting: {this.props.greeting}
          </Typography>
        </Container>
      </React.Fragment>
    );
  }
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};

export default HelloWorld
