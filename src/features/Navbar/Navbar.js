import React from 'react';
import './navbar.css';

export default function Navbar() {
  return (
    <div className="navbar-body">

      <button type="button" className="navbar-logo"> </button>
      <button type="button" className="navbar-item">
        To & From Airport
      </button>
      <button type="button" className="navbar-item">
        At the Airport
      </button>
      <button type="button" className="navbar-item">
        Your Flight
      </button>
    </div>
  );
}
