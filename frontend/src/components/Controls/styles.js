import styled from 'styled-components';
import colors from '~/styles/colors';

export const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    background: rgba(255, 255, 255, 1);
    border: 1px solid ${colors.border};
    border-radius: 4px;
    height: 36px;
    padding: 0 15px;
    color: ${colors.input};
    margin: 0 0 0 16px;

    &::placeholder {
      color: ${colors.placeholder};
    }
  }

  button {
    margin-left: 10px;
  }
`;
