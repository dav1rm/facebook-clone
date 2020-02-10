import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  padding: 0 12%;
  height: 100%;
  margin-top: 54px;

  @media (max-width: 1100px) {
    padding: 0;
  }

  .content {
    margin-right: 12px;
    margin-left: 192px;
    flex: 1;
  }
`;
