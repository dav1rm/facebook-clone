import React from 'react';

import { Container, Card } from './styles';

export default function SideRight() {
  return (
    <Container>
      <Card>
        <img src="https://emojis.wiki/emoji-pics/facebook/wrapped-gift-facebook.png" />
        <span className="gray">
          <strong className="blue">Fulano de Tal</strong> e
          <span className="blue"> outras 21 pessoas</span>
        </span>
      </Card>
      <Card ad>Anúncios 1</Card>
      <Card ad>Anúncios 2</Card>
    </Container>
  );
}
