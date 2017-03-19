import React from 'react';
import { Link } from 'react-router';
import CounterButtonContainer from '../containers/CounterButtonContainer';

const CandyListShow = (props) => {
  return(
    <div>
      <div className="row">
        <div className="text-center medium-6 small-12 columns">
          <img src={props.url} className="list-item-image"/>
        </div>
        <div className="medium-6 small-12 text-center columns">
          <div>
            <p><strong>Candy Name:</strong> {props.name}</p>
            <p><strong>Thoughts:</strong> {props.description}</p>
          </div>
          <button className="button large">
            <CounterButtonContainer
              pageId={props.id}
            />
          </button>
          <div className="row">
            <Link to={`/`}>Back</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CandyListShow;
