import React from 'react';
import './flightSearchRow.css';

export default function FlightSearchRow({ flightInfo, company }) {
  const { logo } = company;
  const {
    departure, arrival, number, from, to,
  } = flightInfo;

  const day = departure.getDay() === arrival.getDay();

  return (
    <div className="flight_search_row">
      <div>
        {number}
        /
        {logo}
      </div>
      <div>{from}</div>
      <div>{to}</div>
      <div>

        {departure.toLocaleTimeString('ru-RU')}
      </div>
      <div>
        {day || <span>+24 </span>}

        {arrival.toLocaleTimeString('ru-RU')}

      </div>
    </div>
  );
}
