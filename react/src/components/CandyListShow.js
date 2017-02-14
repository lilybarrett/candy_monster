import React from 'react';
import { Link } from 'react-router';
import CounterButtonContainer from '../containers/CounterButtonContainer';
import BackButton from './BackButton';

const CandyListShow = (props) => {
  debugger;
  return(
    <div className="row">
      <div className="list-item text-center small-4 columns">
        <img src={props.url} className="list-item-image"/>
        <p>{props.name}</p>
        <button className="button small">
          <CounterButtonContainer />
        </button>
        <button className="button small">
          <BackButton />
        </button>
      </div>
    </div>
  )
}

export default CandyListShow;
