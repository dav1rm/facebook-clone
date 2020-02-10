import styled from 'styled-components';

export const Container = styled.aside`
  width: 296px;

  @media (max-width: 1000px) {
    width: 196px;
  }

  @media (max-width: 800px) {
    display: none;
  }
`;

export const Card = styled.div`
  display: flex;
  padding: 12px;
  border: 1px solid #dddfe2;
  background-color: #fff;
  border-radius: 3px;
  margin-top: 12px;
  align-items: center;
  justify-content: ${props => (props.ad ? 'center' : 'fex-start')};
  height: ${props => (props.ad ? '260px' : 'auto')};

  .gray {
    color: #616770;
  }

  .blue {
    color: #365899;
  }

  span:hover {
    background-color: #f5f6f7;
  }

  img {
    width: 16px;
    height: 16px;
    margin-right: 5px;
  }

  &:first-child {
    margin: 0;
  }
`;
