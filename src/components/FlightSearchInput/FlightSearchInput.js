import React, { useContext, useState } from 'react';
import { FlightContext } from '../../context/FlightContext';
import './flightSearchInput.css';

export default function FlightSearchInput({ handleIsDeparture, isDeparture }) {
  const [input, setInput] = useState('');

  const { handleSearch } = useContext(FlightContext);

  return (
    <div className="flight_search_input">
      <label>
        Search for your flight.
      </label>
      <input
        type="search"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          handleSearch(e.target.value, isDeparture);
        }}
        id="search-flight-input"
      />
      <div
        className="btn-group btn-group-toggle"
        data-toggle="buttons"
      >
        <label className="btn btn-secondary active">
          <input
            type="radio"
            name="options"
            id="option1"
            onChange={() => {
              setInput('');
              handleSearch(null);
              handleIsDeparture(true);
            }}
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
            onChange={() => {
              setInput('');
              handleSearch(null);
              handleIsDeparture(false);
            }}
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
