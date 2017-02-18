import React, { Component } from 'react';
import CandyListShow from '../components/CandyListShow';

class CandyShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      candy: {}
      }
    }

  componentDidMount() {
    this.getData();
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
    debugger;
    if (this.state.candy === null) {
      return(
        <div>
          Loading
        </div>
      )
    } else {
      let candyKey = this.state.candy.id;
      let candyId = this.props.params.id;
      let candyUrl = this.state.candy.url;
      let candyName = this.state.candy.name;
      let candyDescription = this.state.candy.description;

      return(
        <CandyListShow
          key={candyKey}
          id={candyId}
          description={candyDescription}
          url={candyUrl}
          name={candyName}
        />
      )
    };
  }
}

export default CandyShowContainer;
