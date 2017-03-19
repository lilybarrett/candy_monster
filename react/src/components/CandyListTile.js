import React from 'react';
import { Link } from 'react-router';

const CandyListTile = (props) => {
  return(
    <div className="list-item text-center medium-4 small-12 columns">
      <p>{props.name}</p>
      <div>
        <a href={`/candies/${props.id}`}><img src={props.url} className="list-item-image"/></a>
      </div>
    </div>
  )
}

export default CandyListTile;
