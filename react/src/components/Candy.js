import React from 'react';

const Candy = (props) => {
  let thisCandyName;
  let pageId = parseInt(document.getElementById('show-page').dataset.id);
  props.candies.map(candy => {
    if (candy.id === pageId) {
      thisCandyName = candy.name;
    }
  });
  return(
    <div>
      {thisCandyName}
    </div>
  )
}

export default Candy;
