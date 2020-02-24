import React from 'react';

import { Container, ImageContent } from './styles';

import Header from './components/Header';
import Footer from './components/Footer';

export default function Post(props) {
  const renderContent = () => {
    return (
      <>
        {props.text && <p>{props.text}</p>}
        {props.image && (
          <ImageContent image={props.image} alt="content Image" />
        )}
      </>
    );
  };

  return (
    <Container>
      <Header
        user="Davi Rodrigues"
        avatar="https://media-exp1.licdn.com/dms/image/C4D03AQF5ofNur1bmiw/profile-displayphoto-shrink_100_100/0?e=1586995200&v=beta&t=rlQZEAEgdomCpLkqroaqmYCZlOiDZDWMmGF3wulKRaw"
      />
      <div className="post-content">{renderContent()}</div>
      <Footer />
    </Container>
  );
}
