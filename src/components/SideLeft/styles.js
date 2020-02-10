import styled from 'styled-components';

export const Container = styled.aside`
  width: 180px;
  position: fixed;
  left: 12%;

  @media (max-width: 1100px) {
    left: 0;
  }

  h4 {
    margin-top: 15px;
    margin-bottom: 5px;
    margin-left: 5px;
    font-size: 13px;
    color: #616770;
  }
`;
