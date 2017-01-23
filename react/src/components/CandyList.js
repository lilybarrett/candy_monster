import React from 'react';
import Candy from './Candy';

const CandyList = (props) => {

  let candies = props.candies.map((candy) => {
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

export default CandyList;
