import React, { useEffect, useMemo, useState } from 'react';
import generateFlights from '../helpers/generateFlights';

export const FlightContext = React.createContext();

// eslint-disable-next-line react/prop-types
export default function FlightContextProvider({ children }) {
  const [flights, setFlights] = useState([]);
  const [departures, setDepartures] = useState([]);
  const [arrivals, setArrivals] = useState([]);

  useEffect(() => {
    const id = setTimeout(() => {
      const fromHomeAirport = generateFlights(450, 'Ural');
      const toHomeAirport = generateFlights(450, null, 'Ural');

      setFlights([...fromHomeAirport, ...toHomeAirport]);
      setDepartures(fromHomeAirport.sort(
        (a, b) => a.flightInfo.departure.getTime() - b.flightInfo.departure.getTime(),
      ));
      setArrivals(toHomeAirport.sort(
        (a, b) => a.flightInfo.arrival.getTime() - b.flightInfo.arrival.getTime(),
      ));
    }, 150);

    return () => {
      clearTimeout(id);
    };
  }, []);

  const value = useMemo(() => ({ flights, departures, arrivals }), [flights, departures, arrivals]);

  return (
    <FlightContext.Provider value={value}>{children}</FlightContext.Provider>
  );
}
