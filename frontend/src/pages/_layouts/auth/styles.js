import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(-90deg, #ee4d64, #ff7a8d);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 360px;
  height: 448px;
  background: #fff;
  border-radius: 4px;

  img {
    display: flex;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    padding: 40px 15px;
  }

  form {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    margin: 0 30px;
  }

  small {
    color: #444;
    margin: 0 0 2px;
    font-weight: bold;
    padding: 0 1px;
  }

  input {
    color: #999;
    width: 300px;
    height: 45px;
    border-radius: 4px;
    margin-bottom: 15px;
    border: 1px solid #ddd;
    padding: 0 10px;
  }

  span {
    color: #ee4d64;
    align-self: flex-start;
    margin: 0 1px 10px;
  }

  button {
    margin: 5px 0 0;
    height: 44px;
    background: #ee4d64;
    font-weight: bold;
    color: #fff;
    border: 1px #ddd;
    border-radius: 4px;

    &:hover {
      background: ${darken(0.03, '#ff7a8d')};
    }
  }
`;
