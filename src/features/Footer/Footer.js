import React from 'react';
import './footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="footer">
      <p>
        This site is made for Ural,KZ airport as a demonstration
        what it can look like in just a couple of days.
      </p>
      <button
        className="footer_owner"
        type="button"
        onClick={
        () => {
          window.location.href = 'https://github.com/ArtiomOganesyan';
        }
      }
      >
        Site Creator
      </button>
      <button className="footer_up" type="button" onClick={scrollToTop}>UP</button>
    </div>
  );
}
