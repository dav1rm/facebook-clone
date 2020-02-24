import React from 'react';

import Story from './components/Story';
import { Container } from './styles';

export default function Stories() {
  return (
    <Container>
      <header>
        <span>Stories</span>
        <a href="#">Ver tudo</a>
      </header>
      <div className="stories">
        <Story image="https://media-exp1.licdn.com/dms/image/C4D03AQF5ofNur1bmiw/profile-displayphoto-shrink_100_100/0?e=1586995200&v=beta&t=rlQZEAEgdomCpLkqroaqmYCZlOiDZDWMmGF3wulKRaw" />
        <Story
          avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRbg4n40okGbHtt3E5fdzEK-xBLbBUk54tTbyKxz3cZlKupKk0s"
          image="https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819__340.jpg"
        />
        <Story
          avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT3CgTTxDBkArxvYT_Bta7VsQNDWu2ZXtIQCqFWWJZrQsn05flF"
          image="https://i.pinimg.com/originals/ca/76/0b/ca760b70976b52578da88e06973af542.jpg"
        />
        <Story
          avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSqVnkZbMWDWOtZq6nPpEJf-EHmzoK5Bb2nWD-4M3NQ-InAFmar"
          image="https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        />
      </div>
    </Container>
  );
}
