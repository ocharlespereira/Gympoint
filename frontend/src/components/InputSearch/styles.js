import styled from 'styled-components';
import colors from '~/styles/colors';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  svg {
    position: relative;
    left: 46px;
    color: ${colors.placeholder};
  }
`;

export const Search = styled.input`
  background: rgba(255, 255, 255, 1);
  border: 1px; solid ${colors.border};
  border-radius: 4px;
  height: 44px;
  padding: 0px 15px 0px 30px !important;
  color: ${colors.input};
  margin: 0 0 10px;

  &::placeholder{
    color: ${colors.placeholder};
  }
`;
