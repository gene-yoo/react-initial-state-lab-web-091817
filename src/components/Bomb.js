// Bomb Component Code Goes Here
import React from "react";

class Bomb extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      secondsLeft: this.props.initialCount
    };
  }

  render() {
    return (
      <p>
        {this.state.secondsLeft > 0
          ? `${this.state.secondsLeft} seconds left before I go boom!`
          : "Boom!"}
      </p>
    );
  }
}

export default Bomb;
