import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  height: 155px;
  margin-bottom: 10px;
  border: 1px solid #dddfe2;
  border-radius: 5px;
  overflow: hidden;

  header {
    padding: 8px;
    background-color: #f5f6f7;
    border-bottom: 1px solid #dddfe2;

    span {
      color: #4b4f56;
      font-weight: bold;
    }
  }

  .input {
    display: flex;
    align-items: center;
    flex: 1;
    height: 72px;

    textarea {
      display: flex;
      flex: 1;
      outline-color: #fff;
      font-family: Helvetica, Arial, sans-serif;
      font-size: 14px;
      border: 0;
      resize: none;
    }

    img {
      height: 40px;
      width: 40px;
      margin: 10px;
      border-radius: 50%;
    }
  }

  .footer {
    display: flex;
    background-color: #fff;
    padding: 10px;
    border-top: 1px solid #dddfe2;

    button {
      display: flex;
      align-items: center;
      color: #4b4f56;
      font-weight: bold;
      border: 0;
      height: 32px;
      background-color: #f5f6f7;
      border-radius: 20px;
      padding: 0 10px;
      margin-right: 10px;

      &:last-child {
        margin-right: 0;
      }

      img {
        width: 15px;
        height: 15px;
        margin-right: 5px;
      }
    }
  }
`;
