import React from 'react';
import { browserHistory } from 'react-router';

const BackButton = () => {
  return(
    <div className="small-6 columns">
      <button className="button large" onClick={browserHistory.goBack}>Back</button>
    </div>
  )
}

export default BackButton;
