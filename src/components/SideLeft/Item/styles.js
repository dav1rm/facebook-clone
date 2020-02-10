import styled from 'styled-components';
import { MdMoreHoriz } from 'react-icons/md';

export const IconMore = styled(MdMoreHoriz)`
  font-size: 22px;
  color: #616770;
`;

export const Container = styled.a`
  justify-content: space-between;
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 28px;
  border-radius: 2px;
  padding: 0 5px;
  text-decoration: none;
  color: #1d2129;
  margin-bottom: ${props => (props.header ? '10px' : 0)};
  background-color: ${props => (props.active ? '#f5f6f7' : 'transparent')};
  border: ${props =>
    props.active ? '1px solid #dddfe2' : '1px solid transparent'};
  font-weight: ${props => (props.active ? 'bold' : 'regular')};

  span {
    justify-content: flex-start;
    display: flex;
    flex-direction: row;
    align-items: center;

    img {
      height: 20px;
      width: 20px;
      margin-right: 5px;
      border-radius: ${props => (props.header ? '50%' : 0)};
    }
  }

  &:hover {
    background-color: #f5f6f7;
    border: 1px solid #dddfe2;
  }
`;
