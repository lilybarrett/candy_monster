import React from 'react';

const CandyListItem = (props) => {

  return(
    <div className="list-item text-center small-4 columns">
      <p>{props.name}</p>
      <div>
        <img src={props.url} className="list-item-image"/>
      </div>
    </div>
  )
}

export default CandyListItem;
