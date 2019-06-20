import React from "react"
import PropTypes from "prop-types"
import Typography from '@material-ui/core/Typography';

class HelloWorld extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Typography variant="h1">
          Greeting: {this.props.greeting}
        </Typography>
      </React.Fragment>
    );
  }
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};

export default HelloWorld
