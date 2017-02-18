import React from 'react';
import { Link } from 'react-router';
import CounterButtonContainer from '../containers/CounterButtonContainer';

const CandyListShow = (props) => {
  return(
    <div className="row">
      <div className="list-item-show text-center small-4 small-centered columns">
        <img src={props.url} className="list-item-image"/>
        <div className="list-item-show-text">
          <p><strong>Candy Name:</strong> {props.name}</p>
          <p><strong>Thoughts:</strong> {props.description}</p>
        </div>
        <button className="button small">
          <CounterButtonContainer
            pageId={props.id}
          />
        </button>
        <div className="small-6 small-centered columns">
          <Link to={`/`}>Back</Link>
        </div>
      </div>
    </div>
  )
}

export default CandyListShow;
