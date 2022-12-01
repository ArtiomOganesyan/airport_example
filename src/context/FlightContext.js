import React, { useEffect, useMemo, useState } from 'react';
import generateFlights from '../helpers/generateFlights';

export const FlightContext = React.createContext();

// eslint-disable-next-line react/prop-types
export default function FlightContextProvider({ children }) {
  const [flights, setFlights] = useState([]);
  const [departures, setDepartures] = useState([]);
  const [arrivals, setArrivals] = useState([]);
  const [searchFlights, setSearchFlights] = useState(null);

  useEffect(() => {
    const id = setTimeout(() => {
      const fromHomeAirport = generateFlights(200, 'Ural');
      const toHomeAirport = generateFlights(200, null, 'Ural');
      setFlights([...fromHomeAirport, ...toHomeAirport]);
      setDepartures([...fromHomeAirport].sort(
        (a, b) => a.flightInfo.departure.getTime() - b.flightInfo.departure.getTime(),
      ));
      setArrivals([...toHomeAirport].sort(
        (a, b) => a.flightInfo.arrival.getTime() - b.flightInfo.arrival.getTime(),
      ));
    }, 150);

    return () => {
      clearTimeout(id);
    };
  }, []);

  const handleSearch = (text, isDeparture) => {
    if (!text) {
      setSearchFlights(null);
      return;
    }
    const searchFor = isDeparture ? departures : arrivals;
    const trip = isDeparture ? 'to' : 'from';
    setSearchFlights(searchFor
      .filter(
        (flight) => flight.flightInfo[trip].toLowerCase().includes(text.toLowerCase()),
      ));
  };

  const value = useMemo(() => ({
    flights, departures, arrivals, searchFlights, handleSearch,
  }), [flights, departures, arrivals, searchFlights]);

  return (
    <FlightContext.Provider value={value}>{children}</FlightContext.Provider>
  );
}
