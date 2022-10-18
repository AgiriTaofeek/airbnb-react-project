import React from 'react';
import grid from '/assets/photo-grid.png';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <img src={grid} alt="Photo grid" className="hero__img" />
        <div className="hero__text">
          <h1 className="hero__heading">Online Experiences</h1>
          <p className="hero__content">
            Join unique interactive activities led by one-of-a-kind hosts-all
            without leaving home
          </p>
        </div>
      </div>
    </section>
  );
}
