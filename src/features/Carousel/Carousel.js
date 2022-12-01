import React from 'react';
import plane1 from '../../assets/plane.jpg';
import plane2 from '../../assets/plane2.jpg';
import plane3 from '../../assets/plane3.jpg';
import city from '../../assets/city.jpg';
import parking from '../../assets/parking.jpg';
import airport from '../../assets/airport.jpg';

import './carousel.css';

const style = (backgroundLink) => ({
  background: `url('${backgroundLink}')`,
  backgroundPosition: 'center 80%',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
});

export default function Carousel() {
  return (
    <div className="carousel-wrapper">
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">

          <div className="carousel-item active">
            <div style={style(plane1)} className="carousel-content">
              <div>Pilot School For Children</div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus.</p>
            </div>
          </div>
          <div className="carousel-item active">
            <div style={style(plane2)} className="carousel-content">
              <div>Save Time With Online Boarding</div>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
          <div className="carousel-item active">
            <div style={style(city)} className="carousel-content">
              <div>Come Visit Kazakhstan</div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum non in,
                dolorum tempore laudantium architecto hic magnam nobis maxime sit iure,
                doloremque enim nulla sunt. Aperiam eaque, accusamus rem laudantium cupiditate,
                dolorem!
              </p>
            </div>
          </div>
          <div className="carousel-item active">
            <div style={style(airport)} className="carousel-content">
              <div>Your Comfort - Our Priority</div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Debitis ipsum accusamus deserunt sapiente.
              </p>
            </div>
          </div>
          <div className="carousel-item active">
            <div style={style(parking)} className="carousel-content">
              <div>
                Always Free - Always Safe
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="carousel-item active">
            <div style={style(plane3)} className="carousel-content">
              <div>World Wide Geography</div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Mollitia architecto ipsam enim id vero totam minima facere quisquam commodi
                est modi illum rerum non, qui atque incidunt, sit ipsum accusantium.
              </p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
