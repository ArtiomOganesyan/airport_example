import React from 'react';
import './vendors.css';

export default function Vendors() {
  return (
    <div className="vendors_container">

      <div className="vendors_body">
        <div className="vendors_body-title">Service & Entertainment</div>
        <p className="vendors_body-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Nobis voluptatibus voluptatum enim deleniti inventore dolorum.
        </p>
        <p className="vendors_body-text_service">Lorem ipsum dolor sit amet consectetur</p>

        <div className="vendors_body-content">
          <div className="card one">
            <div>Airport Train Service</div>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <button type="button">More</button>
          </div>
          <div className="card two">
            <div>Indoor Park</div>
            <p>Lorem ipsum dolor sit.</p>
            <button type="button">More</button>

          </div>
          <div className="card three">
            <div>Wide Assortment</div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            <button type="button">More</button>

          </div>
          <div className="card four">
            <div>Reliable Taxi Service</div>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <button type="button">More</button>

          </div>
          <div className="card five">
            <div>Comfort Lounge Zone</div>
            <p>Lorem ipsum dolor sit amet.</p>
            <button type="button">More</button>

          </div>

        </div>
      </div>
    </div>
  );
}
