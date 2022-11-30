import React from 'react';
import './flightSearchInput.css';

export default function FlightSearchInput({ handleIsDeparture, isDeparture }) {
  console.log(isDeparture);
  return (
    <div className="flight_search_input">
      <label>
        Search for your flight.
      </label>
      <input type="search" id="search-flight-input" />
      <div
        className="btn-group btn-group-toggle"
        data-toggle="buttons"
      >
        <label className="btn btn-secondary active">
          <input
            type="radio"
            name="options"
            id="option1"
            onChange={() => handleIsDeparture(true)}
            autoComplete="off"
            checked={isDeparture}
          />
          {' '}
          Departures
        </label>
        <label className="btn btn-secondary">
          <input
            type="radio"
            name="options"
            id="option2"
            onChange={() => handleIsDeparture(false)}
            autoComplete="off"
            checked={!isDeparture}
          />
          {' '}
          Arrivals
        </label>

      </div>
    </div>

  );
}
