import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function PaginationInfo({ page, perPage, totalPage, total }) {
  return (
    <Container>
      <strong>Total: {total}</strong>
      <span>
        Página: {page}/{totalPage} itens por página: {perPage}
      </span>
    </Container>
  );
}

PaginationInfo.defaultProps = {
  page: 0,
  perPage: 0,
  totalPage: 0,
  total: 0,
};

PaginationInfo.propTypes = {
  page: PropTypes.number,
  perPage: PropTypes.number,
  totalPage: PropTypes.number,
  total: PropTypes.number,
};
