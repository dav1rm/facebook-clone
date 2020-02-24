import React from 'react';

import { Container, IconMore, IconPublic } from './styles';

export default function Header() {
  return (
    <Container>
      <div className="profile-info">
        <img
          src="https://media-exp1.licdn.com/dms/image/C4D03AQF5ofNur1bmiw/profile-displayphoto-shrink_100_100/0?e=1586995200&v=beta&t=rlQZEAEgdomCpLkqroaqmYCZlOiDZDWMmGF3wulKRaw"
          alt="Profile"
        />
        <div className="text-info">
          <a href="#">Davi Rodrigues</a>
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
