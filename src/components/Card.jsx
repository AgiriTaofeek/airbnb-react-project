import React from 'react';
import star from '/assets/star.png';

export default function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = 'SOLD OUT';
  } else if (props.location === 'Online') {
    badgeText = 'ONLINE';
  }

  return (
    <article className="card">
      {badgeText && <span className="card__badge">{badgeText}</span>}
      <img src={props.coverImg} alt={props.coverImg} className="card__img" />
      <div className="card__data-stat mt">
        <img src={star} alt="Star for rating" className="card__star-img" />
        <span className="gray">{props.stats.rating}</span>
        <span>({props.stats.reviewCount})</span>
        <span className="gray">.{props.location}</span>
      </div>
      <p className="card__title mt">{props.title}</p>
      <p className="card__price mt">
        From
        <span className="bold"> ${props.price}</span> / person
      </p>
    </article>
  );
}
