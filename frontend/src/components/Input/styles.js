import styled from 'styled-components';
import { Input } from '@rocketseat/unform';
import colors from '~/styles/colors';

export const CustomInput = styled(Input)`
  background: rgba(255, 255, 255, 1);
  border: 1px solid ${colors.border};
  border-radius: 4px;
  height: 40px;
  padding: 0 15px;
  color: ${colors.input};
  margin: 0 0 10px;
  width: 100%;
`;
