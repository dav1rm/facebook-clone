import React from 'react';

import { Container, IconMore } from './styles';

export default function NewPost() {
  return (
    <Container>
      <header>
        <span>Criar publicação</span>
      </header>
      <div className="input">
        <img
          src="https://media-exp1.licdn.com/dms/image/C4D03AQF5ofNur1bmiw/profile-displayphoto-shrink_100_100/0?e=1586995200&v=beta&t=rlQZEAEgdomCpLkqroaqmYCZlOiDZDWMmGF3wulKRaw"
          alt="Profile"
        />
        <textarea placeholder="No que você está pensando, Davi?"></textarea>
      </div>
      <div className="footer">
        <button>
          <img
            src="https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg"
            alt="Foto"
          />
          <span> Foto/Video</span>
        </button>
        <button>
          <img
            src="https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg"
            alt="Marcar"
          />
          <span>Marcar amigos</span>
        </button>
        <button>
          <img
            src="https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg"
            alt="Sentimento"
          />
          <span>Sentimento/atividade</span>
        </button>
        <button>
          <IconMore />
        </button>
      </div>
    </Container>
  );
}
