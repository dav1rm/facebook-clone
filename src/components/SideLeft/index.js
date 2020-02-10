import React from 'react';

import { Container } from './styles';
import Item from './Item';

export default function SideLeft() {
  return (
    <Container>
      <Item
        header
        url="#"
        label="Davi Rodrigues"
        image="https://media-exp1.licdn.com/dms/image/C4D03AQF5ofNur1bmiw/profile-displayphoto-shrink_100_100/0?e=1586995200&v=beta&t=rlQZEAEgdomCpLkqroaqmYCZlOiDZDWMmGF3wulKRaw"
      />
      <Item
        active
        url="#"
        label="Feed de Notícias"
        config
        image="https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg"
      />
      <Item
        url="#"
        label="Messenger"
        image="https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg"
      />
      <Item
        url="#"
        label="Watch"
        image="https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg"
      />
      <Item
        url="#"
        label="Marketplace"
        image="https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg"
      />
      <h4>Atalhos</h4>
      <Item
        url="#"
        label="Alguma coisa"
        config
        image="https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg"
      />
      <Item
        url="#"
        label="Algum grupo"
        image="https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg"
      />
      <h4>Explorar</h4>
      <Item
        url="#"
        label="Páginas"
        config
        image="https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg"
      />
      <Item
        url="#"
        label="Grupos"
        image="https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg"
      />
      <Item
        url="#"
        label="Eventos"
        image="https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg"
      />
    </Container>
  );
}
