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
          avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTKM9BUy0eVYn8_C3sg0J40Oa5MlWpFbS83fleauNdF4W5HQQJQ"
          image="https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819__340.jpg"
        />
        <Story
          avatar="https://lh3.googleusercontent.com/proxy/YHWdGdLFEeXVphbLoLbB8DoGkzehkpwbj1mUqThx0TmHW08UbZoG6S-bV9-xWrqWeyIi0NVxmxm6HesSWEcnePeBIe-fvherihCjIpZULm9WUhuRKGc-hv6HetA"
          image="https://i.pinimg.com/originals/ca/76/0b/ca760b70976b52578da88e06973af542.jpg"
        />
        <Story
          avatar="https://www.irreverentgent.com/wp-content/uploads/2018/03/Awesome-Profile-Pictures-for-Guys-look-away2.jpg"
          image="https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        />
      </div>
    </Container>
  );
}
