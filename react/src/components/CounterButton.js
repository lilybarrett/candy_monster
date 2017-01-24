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
    let newClickCount;
    let pageId = parseInt(document.getElementById('counter-button').dataset.id);
    let fetchBody = { id: pageId };

    fetch(`http://localhost:3000/api/v1/candies/${pageId}`,
      { method: "PATCH",
        body: fetchBody
      })
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          console.log("Oops");
          let errorMessage = `${response.status} ($response.statusText)`,
            error = new Error(errorMessage);
            throw(error);
        }
      })
      .then(response => {
        newClickCount = response.json();
        return response;
      })
      .then(response => {
        debugger;
        this.setState({clickCount: newClickCount})
      })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
}

  render() {
    return(
      <div onClick={this.handleClick}>
        <h1>Yumometer: {this.state.clickCount}</h1>
      </div>
    );
  }
}

export default CounterButton;
