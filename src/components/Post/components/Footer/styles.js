import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  background-color: #fff;

  .post-info {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #dadde1;
    margin: 10px 12px 0 12px;
    padding-bottom: 10px;

    div {
      display: flex;
      align-items: center;

      img {
        width: 20px;
        height: 20px;
        margin-right: -2px;
        border: 1px solid #fff;
      }

      span {
        line-height: 20px;
        margin-left: 5px;
        color: #606770;
        vertical-align: center;
      }
    }
  }

  .action-buttons {
    display: flex;
    flex-direction: row;
    margin: 0 12px;
    padding: 4px 0;

    button {
      display: flex;
      flex: 1;
      border: 0;
      height: 32px;
      background-color: #fff;
      align-items: center;
      justify-content: center;

      img {
        height: 16px;
        width: 16px;
      }

      span {
        margin-left: 5px;
        color: #606770;
        font-weight: bold;
      }

      span#like {
        color: rgb(32, 120, 244);
      }
      span#love {
        color: rgb(243, 62, 88);
      }
      span#haha,
      #uau,
      #sad {
        color: rgb(247, 177, 37);
      }

      span#grr {
        color: rgb(233, 113, 15);
      }

      &:hover {
        background-color: rgba(0, 0, 0, 0.05);
        border-radius: 2px;
      }
    }
  }
`;
