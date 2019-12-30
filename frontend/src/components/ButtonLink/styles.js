import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { darken } from 'polished';

export const CustomButtonLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
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
    background: ${props => darken(0.5, props.color)};
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
