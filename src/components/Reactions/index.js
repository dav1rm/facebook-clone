import React, { useState, useEffect } from 'react';

import { Container } from './styles';

import like from '../../assets/like.gif';
import love from '../../assets/love.gif';
import haha from '../../assets/haha.gif';
import uau from '../../assets/uau.gif';
import grr from '../../assets/grr.gif';
import sad from '../../assets/sad.gif';

export default function Reactions(props) {
  const options = [
    { label: 'Curtir', value: 'like', image: like },
    { label: 'Amei', value: 'love', image: love },
    { label: 'Haha', value: 'haha', image: haha },
    { label: 'Uau', value: 'uau', image: uau },
    { label: 'Triste', value: 'sad', image: sad },
    { label: 'Grr', value: 'grr', image: grr },
  ];

  return (
    <Container
      show={props.show}
      onMouseEnter={props.handleOnHoverIn}
      onMouseLeave={props.onMouseLeave}
    >
      {options.map(item => (
        <button
          key={item.value}
          type="button"
          className="react"
          onClick={() => props.handleReactInPost(item.value)}
        >
          <span>{item.label}</span>
          <img src={item.image} alt={item.value} />
        </button>
      ))}
    </Container>
  );
}
