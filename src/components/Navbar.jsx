import React from 'react';
import airbnb from '/assets/airbnb-logo.png';

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="container">
        <img src={airbnb} alt="airbnb logo" className="nav__logo" />
      </div>
    </nav>
  );
}
