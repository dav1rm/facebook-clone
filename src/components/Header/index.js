import React from 'react';
import { MdSearch } from 'react-icons/md';

import {
  Container,
  Search,
  NavMenu,
  IconMenu,
  IconMessenger,
  IconBell,
  IconCaretDown,
  IconFriends,
  IconQuestion,
} from './styles';
import logo from '../../assets/logo-white.png';

export default function Header() {
  return (
    <Container>
      <div className="left">
        <img src={logo} alt="Facebook" />
        <Search>
          <input type="text" name="search" placeholder="Pesquisar" />
          <button type="button">
            <MdSearch />
          </button>
        </Search>
      </div>
      <div className="right">
        <NavMenu>
          <ul>
            <li>
              <a href="#">
                <img
                  src="https://media-exp1.licdn.com/dms/image/C4D03AQF5ofNur1bmiw/profile-displayphoto-shrink_100_100/0?e=1586995200&v=beta&t=rlQZEAEgdomCpLkqroaqmYCZlOiDZDWMmGF3wulKRaw"
                  alt="Profile"
                />
                Davi
              </a>
            </li>
            <li>
              <a href="#">Página inicial</a>
            </li>
            <li>
              <a href="#">Criar</a>
            </li>
            <li>
              <IconMenu>
                <IconFriends />
                <IconMessenger />
                <IconBell />
              </IconMenu>
            </li>
            <li>
              <IconMenu>
                <IconQuestion />
                <IconCaretDown />
              </IconMenu>
            </li>
          </ul>
        </NavMenu>
      </div>
    </Container>
  );
}
