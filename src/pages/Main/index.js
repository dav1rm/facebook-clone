import React from 'react';

import { Container } from './styles';

import SideLeft from '../../components/SideLeft';
import SideRight from '../../components/SideRight';
import NewPost from '../../components/NewPost';
import Stories from '../../components/Stories';

export default function Main() {
  return (
    <Container>
      <SideLeft />
      <div className="content">
        <NewPost />
        <Stories />
      </div>
      <SideRight />
    </Container>
  );
}
