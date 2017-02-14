import React from 'react';
import { Link } from 'react-router';
import CounterButtonContainer from '../containers/CounterButtonContainer';
import BackButton from './BackButton';

const CandyListTile = (props) => {

  return(
    <div className="list-item text-center small-4 columns">
      <p>{props.name}</p>
      <div>
        <Link to={`/candies/${props.id}`}><img src={props.url} className="list-item-image"/></Link>
      </div>
    </div>
  )
}

export default CandyListTile;
