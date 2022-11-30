import React from 'react';
import Carousel from '../features/Carousel/Carousel';
import FlightSearch from '../features/FlightSearch/FlightSearch';
import News from '../features/News/News';
import Vendors from '../features/Vendors/Vendors';

import './home.css';

export default function Home() {
  return (
    <div className="home">
      <Carousel />
      <FlightSearch />
      <Vendors />
      <News />
    </div>
  );
}
