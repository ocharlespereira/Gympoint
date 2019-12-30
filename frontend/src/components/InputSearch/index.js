import React from 'react';
import PropsTypes from 'prop-types';
import { MdSearch } from 'react-icons/md';
import { debounce } from 'lodash';
import { Container, Search } from './styles';

export default function InputSearch({ handleSearch, timeDebounce, ...rest }) {
  const search = debounce(value => handleSearch(value), timeDebounce);

  function handleChange(e) {
    search(e.target.value);
  }

  return (
    <Container>
      <MdSearch size={24} />
      <Search onChange={handleChange} {...rest} />
    </Container>
  );
}

InputSearch.defaultProps = {
  timeDebounce: 500,
};

InputSearch.PropsTypes = {
  handleSearch: PropsTypes.func.isRequired,
  timeDebounce: PropsTypes.number,
};
