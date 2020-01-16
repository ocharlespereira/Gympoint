import styled from 'styled-components';

function getWidthGrid(value) {
  if (!value) return;

  const width = (value / 12) * 100;
  // eslint-disable-next-line consistent-return
  return `width: ${width}%;`;
}

export const CustomColumn = styled.div`
  float: left;
  padding: 0.25rem;
  min-height: 1px;
  box-sizing: border-box;
  @media only screen and (max-width: 768px) {
    ${({ mobile }) => mobile && getWidthGrid(mobile)}
  }
  @media only screen and (min-width: 768px) {
    ${({ tablet }) => tablet && getWidthGrid(tablet)}
  }
  @media only screen and (min-width: 1000px) {
    ${({ desktop }) => desktop && getWidthGrid(desktop)}
  }
`;
