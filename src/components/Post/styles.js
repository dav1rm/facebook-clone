import styled from 'styled-components';
import { MdMoreHoriz } from 'react-icons/md';

export const IconMore = styled(MdMoreHoriz)`
  font-size: 22px;
  color: #616770;

  &:hover {
    cursor: pointer;
  }
`;

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  margin-bottom: 10px;
  border: 1px solid #dddfe2;
  border-radius: 5px;
  overflow: hidden;
  position: relative;

  .post-content {
    display: flex;

    p {
      font-size: 14px;
      padding: 12px;
    }
  }
`;
