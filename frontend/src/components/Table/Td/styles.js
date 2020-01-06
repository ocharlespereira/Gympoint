import styled from 'styled-components';
import colors from '~/styles/colors';

export const CustomId = styled.td`
    text-align: ${props => props.align};
    color: ${colors.tableTd};
    padding: 16px 0px;
    border-bottom: 1px solid ${colors.tableBorder};
`;