import styled from 'styled-components';

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
    flex-direction: column;
    background-size: cover;

    p {
      font-size: 14px;
      padding: 0 12px;
    }
  }
`;

export const ImageContent = styled.div`
  width: auto;
  margin-top: 10px;
  min-height: 300px;
  background-size: cover;
  background: ${props =>
    props.image ? `url('${props.image}') center top no-repeat` : '#fff'};
`;
