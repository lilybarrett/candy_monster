import React, { Component } from 'react';
import Candy from './Candy';

class CandyList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      candies: []
    }
  }

  componentDidMount() {
    debugger;
    let currentThis = this;
    fetch('http://localhost:3000/api/v1/candies.json')
      .then(response => {
        if (response.ok) {
          debugger;
          return response;
        } else {
          let errorMessage = `${response.status} ($response.statusText)`,
            error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(body => {
        debugger;
        this.setState({candies: body});
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    let candies = this.state.candies.map((candy) => {
      debugger;
      return(
        <Candy
          key={candy.id}
          name={candy.name}
        />
      )
    })

    return(
      <div>
        <ul>
          {candies}
        </ul>
      </div>
    )
  }
}

export default CandyList;
