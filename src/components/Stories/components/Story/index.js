import React from 'react';

import { Container, IconPlus } from './styles';

export default function Story(props) {
  return (
    <Container bgImage={props.image}>
      <div>
        {props.avatar ? <img src={props.avatar} alt="Profile" /> : <IconPlus />}
      </div>
      <span>{props.label ? props.label : 'Adicionar ao story'}</span>
    </Container>
  );
}
