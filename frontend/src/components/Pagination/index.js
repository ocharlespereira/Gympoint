import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';

import { Paginator, PagePrev, PageItem, PageNext } from './styles';

export default function Pagination({
  align,
  onLoadPage,
  page,
  totalPage,
  sizePagination,
}) {
  const [itens, setItens] = useState([]);
  const [pageSelected, setPageSelected] = useState(1);

  useMemo(() => {
    const size = totalPage < sizePagination ? totalPage : sizePagination;
    const currentPage = page || 1;

    let start = 1;
    let length = size;

    if (currentPage > size) {
      start = currentPage - size;
      length = start + size;
    }

    const fill = [];
    // eslint-disable-next-line no-plusplus
    for (let number = start; number <= length; number++) {
      fill.push(number);
    }

    setItens(fill);
  }, [page, totalPage, sizePagination]);

  // eslint-disable-next-line no-shadow
  function handleLoadPage(page) {
    setPageSelected(page);
    onLoadPage(page);
  }

  function handlePrevPage() {
    if (pageSelected === 1) return;
    // eslint-disable-next-line no-shadow
    const page = pageSelected - 1;
    setPageSelected(page);
    handleLoadPage(page);
  }

  function handleNextPage() {
    if (pageSelected === totalPage) return;
    // eslint-disable-next-line no-shadow
    const page = pageSelected + 1;
    setPageSelected(page);
    handleLoadPage(page);
  }

  return (
    <Paginator align={align}>
      {pageSelected > 1 && (
        <PagePrev title="Anterior" onClick={handlePrevPage}>
          &laquo;
        </PagePrev>
      )}

      {itens.map((item, index) => (
        <PageItem
          key={String(index)}
          active={item === pageSelected}
          onClick={() => handleLoadPage(item)}
        >
          {item}
        </PageItem>
      ))}

      {pageSelected < totalPage && (
        <PageNext title="Próxima" onClick={handleNextPage}>
          &raquo;
        </PageNext>
      )}
    </Paginator>
  );
}

Pagination.defaultProps = {
  align: 'center',
  sizePagination: 7,
};

Pagination.propTypes = {
  align: PropTypes.string,
  onLoadPage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  totalPage: PropTypes.number.isRequired,
  sizePagination: PropTypes.number,
};
