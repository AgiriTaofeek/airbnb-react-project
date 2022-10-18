import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data';

export default function App() {
  const info = data.map((el) => (
    <Card
      //*The key is important for clear the errors we keep seeing
      key={el.id}
      //* This is a better way to add props to JSX. the whole object is now an item
      // item={el}
      //* An even better way with spread operator
      {...el}
      // img={el.coverImg}
      // rating={el.stats.rating}
      // reviewCount={el.stats.reviewCount}
      // title={el.title}
      // location={el.location}
      // price={el.price}
      // openSpots={el.openSpots}
    />
  ));
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <section className="review">{info}</section>
      </main>
    </div>
  );
}
