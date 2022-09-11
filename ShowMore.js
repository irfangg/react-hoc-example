import React, { useState } from 'react';
const List = ({ itemsLength, itemsLimit, children }) => {
  const [itemsToShow, setItemsToShow] = useState(itemsLimit);
  const [expanded, setExpand] = useState(false);
  const [remaining, setRemaining] = useState();
  const showMore = () => {
    if (itemsToShow === itemsLimit) {
      setItemsToShow(itemsLength);
      setExpand(true);
    } else {
      setItemsToShow(itemsLimit);
      setExpand(false);
    }
  };

  return (
    <div className="container">
      {children(itemsToShow)}
      <p>
        <a className="btn btn-primary" onClick={showMore}>
          {expanded ? <span>Show less</span> : <span>Show more</span>}
        </a>
        .
      </p>
    </div>
  );
};
export default List;
