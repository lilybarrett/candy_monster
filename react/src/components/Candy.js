import React from 'react';

const Candy = (props) => {
  let thisCandyName;
  if (document.getElementById('show-page')) {
    let pageId = parseInt(document.getElementById('show-page').dataset.id);
    props.candies.map(candy => {
      if (candy.id === pageId) {
        thisCandyName = candy.name;
      }
    });
  } else {
    props.candies.map(candy => {
      thisCandyName = candy.name;
    });
  }

  return(
    <div>
      {thisCandyName}
    </div>
  )
}

export default Candy;
