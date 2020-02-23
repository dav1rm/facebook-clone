import styled from 'styled-components';
import { MdMoreHoriz } from 'react-icons/md';

export const IconMore = styled(MdMoreHoriz)`
  font-size: 22px;
  color: #616770;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  margin-bottom: 10px;
  border: 1px solid #dddfe2;
  border-radius: 5px;
  overflow: hidden;
  padding: 12px;

  header {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
    justify-content: space-between;
    background-color: #fff;

    span {
      color: #616770;
      font-weight: bold;

      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }

    a {
      color: #385898;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .stories {
    display: flex;
    flex-direction: row;
  }
`;
