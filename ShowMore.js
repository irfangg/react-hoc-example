import React, { useState } from 'react';
const List = ({ itemsLimit, data, children }) => {
  const [itemsToShow, setItemsToShow] = useState(itemsLimit);
  const [expanded, setExpand] = useState(false);
  const [remaining, setRemaining] = useState(data.length - itemsLimit);
  const [dataToShow, setDataToShow] = useState(data.slice(0, itemsLimit));
  const showMore = () => {
    if (itemsToShow === itemsLimit) {
      setItemsToShow(data.length);
      setDataToShow(data.slice(0, data.length));
      setExpand(true);
    } else {
      setItemsToShow(itemsLimit);
      setDataToShow(data.slice(0, itemsLimit));
      setExpand(false);
    }
  };

  return (
    <div className="container">
      {children(dataToShow)}
      <p>
        <a className="btn btn-primary" onClick={showMore}>
          {expanded ? (
            <span>Show less</span>
          ) : (
            <span>{remaining}+ Show more</span>
          )}
        </a>
        .
      </p>
    </div>
  );
};
export default List;
