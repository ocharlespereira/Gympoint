import styled from 'styled-components';
import { darken } from 'polished';

export const CustomButton = styled.button`
  height: 34px;
  background: ${props => props.color};
  border: 0;
  border-radius: 4px;
  font-size: 14px;
  padding: 0px 15px;

  color: #fff;
  font-weight: bold;
  text-transform: uppercase;

  transition: background 0.2s;
  &:hover {
    background: ${props => darken(0.05, props.color)};
  }

  display: flex;
  justify-content: center;
  align-items: center;
`;
