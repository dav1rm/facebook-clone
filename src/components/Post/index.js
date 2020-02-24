import React from 'react';

import { Container, IconMore } from './styles';

import Header from './components/Header';
import Footer from './components/Footer';

export default function Post() {
  return (
    <Container>
      <Header />
      <div className="post-content">
        <p>
          O que é um Hook? Um Hook é uma função especial que te permite utilizar
          recursos do React. Por exemplo, useState é um Hook que te permite
          adicionar o state do React a um componente de função. Vamos aprender
          outros Hooks mais tarde. Quando eu deveria usar um Hook? Se você
          escreve um componente de função e percebe que precisa adicionar algum
          state para ele, anteriormente você tinha que convertê-lo para uma
          classe. Agora você pode usar um Hook dentro de um componente de função
          existente. Vamos fazer isso agora mesmo!
        </p>
      </div>
      <Footer />
    </Container>
  );
}
