import React from 'react';

const Candy = (props) => {

  let thisCandyName;
  let thisCandyDescription;

  if (document.getElementById('show-page')) {
    let pageId = parseInt(document.getElementById('show-page').dataset.id);
    props.candies.map(candy => {
      if (candy.id === pageId) {
        thisCandyName = candy.name;
        thisCandyDescription = candy.description;
      }
    });
  }

  return(
    <div className="candy-show">
      <p>{thisCandyName}</p>
      <p>{thisCandyDescription}</p>
    </div>
  )
}

export default Candy;
