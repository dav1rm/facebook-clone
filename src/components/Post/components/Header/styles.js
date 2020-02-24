import styled from 'styled-components';
import { MdMoreHoriz, MdPublic } from 'react-icons/md';

export const IconMore = styled(MdMoreHoriz)`
  font-size: 22px;
  color: #616770;

  &:hover {
    cursor: pointer;
  }
`;

export const IconPublic = styled(MdPublic)`
  font-size: 14px;
  margin-left: 4px;
  color: #616770;

  &:hover {
    cursor: pointer;
  }
`;

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  padding: 12px;

  .profile-info {
    display: flex;

    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 10px;
    }

    .text-info {
      display: flex;
      flex-direction: column;

      a {
        margin: 3px 0;
        color: #385898;
        font-weight: bold;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }

      div {
        display: flex;
        align-items: center;

        span {
          color: #616770;
          vertical-align: center;
        }
      }
    }
  }
`;
