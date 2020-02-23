import styled from 'styled-components';
import { MdAdd } from 'react-icons/md';

export const IconPlus = styled(MdAdd)`
  font-size: 24px;
  color: #306cce;
`;

export const Container = styled.div`
  min-width: 110px;
  height: 200px;
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  justify-content: space-between;
  border-radius: 10px;
  background: ${props =>
    props.bgImage ? `url('${props.bgImage}') center no-repeat` : 'red'};
  background-size: cover;
  padding: 8px;

  &:last-child {
    margin-right: 0;
  }

  div {
    height: 40px;
    width: 40px;
    background-color: #fff;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      border-radius: 50%;
      border: 4px solid #306cce;
    }
  }

  span {
    color: #fff;
    font-weight: bold;
    font-size: 13px;
    line-height: 16px;
  }
`;
