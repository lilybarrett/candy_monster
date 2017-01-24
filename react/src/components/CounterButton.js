import React, { Component } from 'react';

class CounterButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clickCount: 0
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    let newClickCount = this.state.clickCount + 1;
    this.setState({ clickCount: newClickCount });
  }

  render() {
    return(
      <div onClick={this.handleClick}>
        <h1>Points: {this.state.clickCount}</h1>
      </div>
    );
  }
}

export default CounterButton;
