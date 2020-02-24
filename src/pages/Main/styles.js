import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  padding: 0 12%;
  height: 100%;
  margin-top: 54px;

  position: relative;

  @media (max-width: 1125px) {
    padding: 0 2%;
  }

  @media (max-width: 1050px) {
    padding: 0;
  }

  .content {
    margin-right: 12px;
    margin-left: 192px;
    flex: 1;

    @media (max-width: 768px) {
      margin: 0;
    }
  }
`;
