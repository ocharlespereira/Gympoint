import styled from 'styled-components';
import colors from '~/styles/colors';

export const Paginator = styled.ul`
  display: flex;
  align-items: center;
  justify-content: ${props =>
    props.align === 'center' ? 'center' : 'flex-start'};
`;

export const PagePrev = styled.li`
  padding: 0.5rem 0.75rem;
  margin-left: -1px;
  line-height: 1.25;
  color: ${props => (props.active ? '#fff' : colors.primary)};
  background-color: ${props => (props.active ? colors.primary : '#fff')};
  border: 1px solid #dee2e6;

  &:hover {
    background-color: ${colors.primary};
    color: #fff;
  }
`;

export const PageItem = styled.li`
  padding: 0.5rem 0.75rem;
  margin-left: -1px;
  line-height: 1.25;
  color: ${props => (props.active ? '#fff' : colors.primary)};
  background-color: ${props => (props.active ? colors.primary : '#fff')};
  border: 1px solid #dee2e6;

  &:hover {
    background-color: ${props => (props.active ? colors.primary : '#E9ECEF')};
    border-color: ${props => (props.active ? colors.primary : '#DEE2E6')};
  }
`;

export const PageNext = styled.li`
  padding: 0.5rem 0.75rem;
  margin-left: -1px;
  line-height: 1.25;
  color: ${props => (props.active ? '#fff' : colors.primary)};
  background-color: ${props => (props.active ? colors.primary : '#fff')};
  border: 1px solid #dee2e6;

  &:hover {
    background-color: ${colors.primary};
    color: #fff;
`;
