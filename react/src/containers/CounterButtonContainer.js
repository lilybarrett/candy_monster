import React, { Component } from 'react';

class CounterButtonContainer extends Component {
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
          return response.json();
        } else {
          console.log("Oops");
          let errorMessage = `${response.status} ($response.statusText)`,
            error = new Error(errorMessage);
            throw(error);
        }
      })
      .then(data => {
        console.log(data);
        newClickCount = data.candy.points;
        this.setState({ clickCount: newClickCount })
      })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
}

  render() {
    return(
      <div onClick={this.handleClick}>
        <h1>Yum-o-Meter: {this.state.clickCount}</h1>
      </div>
    );
  }
}

export default CounterButtonContainer;
