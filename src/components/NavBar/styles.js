import styled from 'styled-components';
import {
  FaFacebookMessenger,
  FaBell,
  FaQuestionCircle,
  FaCaretDown,
  FaUserFriends,
} from 'react-icons/fa';

// -------- Styled Icons --------

const commoStyle = `
color:rgba(0, 0, 0, 0.6);
font-size: 20px;
margin: 0 10px;

&:hover {
  border-radius: 2px;
  color: rgba(0, 0, 0, 0.9);
}
`;

export const IconMessenger = styled(FaFacebookMessenger)`
  ${commoStyle}
`;
export const IconBell = styled(FaBell)`
  ${commoStyle}
`;
export const IconQuestion = styled(FaQuestionCircle)`
  ${commoStyle}
`;
export const IconCaretDown = styled(FaCaretDown)`
  ${commoStyle}
`;
export const IconFriends = styled(FaUserFriends)`
  ${commoStyle}
`;

// -------- Styled Containers --------

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 42px;
  position: fixed;
  top: 0;
  padding: 0 12%;
  background-color: #4267b2;
  border-bottom: 2px solid #3b5998;

  @media (max-width: 1125px) {
    padding: 0 2%;
  }

  @media (max-width: 1050px) {
    padding: 0;
  }

  .left {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 50%;

    img {
      height: 24px;
      width: 24px;
      margin-right: 10px;
    }
  }

  .right {
    display: flex;
    flex-direction: row;
    align-items: center;

    img {
      height: 24px;
      width: 24px;
      border-radius: 50%;
    }
  }
`;

export const Search = styled.div`
  display: flex;
  flex: 1;
  height: 26px;
  background-color: #ffffff;
  border: 1px solid #3b5998;
  border-radius: 4px;
  overflow: hidden;

  input {
    padding: 0 5px;
    flex: 1;
    height: 100%;
    border: 0;
    font-size: 14px;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    background-color: #f5f6f7;
    color: #4b4f56;
    border: 0;
    width: 46px;
    transition: 200ms;

    &:hover {
      background: #ebedf0;
    }
  }
`;

export const NavMenu = styled.nav`
  height: 26px;
  display: flex;
  align-items: center;

  ul {
    display: flex;
    flex: 1;
    flex-direction: row;
    list-style: none;

    li {
      display: flex;
      align-items: center;

      a {
        display: flex;
        align-items: center;
        color: #fff;
        height: 100%;
        padding: 0 10px;
        font-weight: bold;
        text-decoration: none;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        img {
          margin-right: 5px;
        }

        &:hover {
          border-radius: 2px;
          background: rgba(0, 0, 0, 0.1);
        }
      }

      &::after {
        background: rgba(0, 0, 0, 0.1);
        content: '';
        height: 18px;
        width: 1px;
      }
    }
  }
`;

export const IconMenu = styled.div`
  display: flex;
  align-items: center;
`;
