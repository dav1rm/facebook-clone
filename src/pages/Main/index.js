import React from 'react';

import { Container } from './styles';

import SideLeft from '../../components/SideLeft';
import SideRight from '../../components/SideRight';
import NewPost from '../../components/NewPost';

export default function Main() {
  return (
    <Container>
      <SideLeft />
      <div className="content">
        <NewPost />
      </div>
      <SideRight />
    </Container>
  );
}
