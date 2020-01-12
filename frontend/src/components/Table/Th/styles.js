import styled from 'styled-components';
import colors from '~/styles/colors';

export const CustomTh = styled.th`
  text-align: ${props => props.align};
  color: ${colors.strong};
  padding-bottom: 20px;
`;
