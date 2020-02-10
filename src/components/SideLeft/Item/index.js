import React from 'react';

import { Container, IconMore } from './styles';

export default function Item(props) {
  return (
    <Container href={props.url} header={props.header} active={props.active}>
      <span>
        <img src={props.image} alt="Item" />
        {props.label}
      </span>
      {props.config && <IconMore />}
    </Container>
  );
}
