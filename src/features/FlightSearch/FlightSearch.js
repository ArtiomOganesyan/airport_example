import React, { useContext, useState } from 'react';
import FlightSearchInput from '../../components/FlightSearchInput/FlightSearchInput';
import Timer from '../../components/Timer/Timer';
import { FlightContext } from '../../context/FlightContext';
import generateRowArray from '../../helpers/generateRowArray';
import './flightSearch.css';

export default function FlightSearch() {
  const { flights, departures, arrivals } = useContext(FlightContext);
  const [isDeparture, setIsDeparture] = useState(true);
  const header = {
    static: true,
    text: `Flight   ${isDeparture ? 'Departure To   Departure Time  ' : 'Arrival From   Arrival Time    '}`.split(''),
  };
  const gap = {
    static: true,
    text: '_'.repeat(40).split(''),
  };
  const terminal = new Array(20).fill('').map(
    (el, i) => {
      const result = isDeparture ? departures[i] : arrivals[i];
      if (!result) {
        return gap;
      }

      return result;
    },
  );
  if (!flights.length) {
    return null;
  }

  const handleIsDeparture = (bool) => {
    setIsDeparture(bool);
  };

  terminal.unshift(header, gap);
  return (
    <div className="flight_search">
      <div className="flight_search-header">
        <Timer />
        <FlightSearchInput handleIsDeparture={handleIsDeparture} isDeparture={isDeparture} />
      </div>
      <div className="flight_search-content">
        {terminal.map(
          (row) => (
            <div key={Math.random()}>
              {generateRowArray(row, isDeparture)}
            </div>
          ),
        )}
      </div>
    </div>
  );
}
