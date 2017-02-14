import React, { Component } from 'react';
import CandyListShow from '../components/CandyListShow';

class CandyShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      candy: null
      }
    }

  componentDidMount() {
    getData();
  }

  getData() {
    let candyId = this.props.params.id;
    fetch(`/api/v1/candies/${candyId}`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({candy: responseData.candy})
      });
  }

  render() {
    return(
      <CandyListShow
        key={this.state.candy.id}
        id={this.state.candy.id}
        url={this.state.candy.url}
        name={this.state.candy.name}
      />
    )
  }
}

export default CandyShowContainer;
