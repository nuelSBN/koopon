import React from 'react';
import { StayedCard } from './styled/Card.styled';
import content from '../content';

export default function Card() {
  return (
    <StayedCard>
      <div>
        <h2>{content.title}</h2>
        <p>{content.body}</p>
      </div>
      <div>
        <img src={`./images/${content.image}`} alt="" />
      </div>
    </StayedCard>
  );
}
