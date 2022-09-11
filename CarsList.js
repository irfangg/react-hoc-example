import React, { useState } from 'react';
const CarsList = ({ cars, itemsToShow }) => {
  return (
    <div className="container">
      <h3>Click show more to see more data</h3>
      <div className="row">
        <h3>List of Cars</h3>
        <ul>
          {cars.map((car, i) => (
            <li key={i}>
              {car.name} - {car.country}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default CarsList;
