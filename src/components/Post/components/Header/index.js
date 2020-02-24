import React from 'react';

import { Container, IconMore, IconPublic } from './styles';

export default function Header(props) {
  return (
    <Container>
      <div className="profile-info">
        <img src={props.avatar} alt="Profile" />
        <div className="text-info">
          <a href="#">{props.user}</a>
          <div>
            <span>1h · </span>
            <IconPublic />
          </div>
        </div>
      </div>
      <IconMore />
    </Container>
  );
}
