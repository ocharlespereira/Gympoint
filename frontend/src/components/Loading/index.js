import React from 'react';
import PropsTypes from 'prop-types';
import { Container, CustomLoading, Message } from './styles';

export default function Loading({ message }) {
  return (
    <Container>
      <CustomLoading />
      <Message>{message}</Message>
    </Container>
  );
}

Loading.defaultProps = {
  message: 'Carregando...',
};

Loading.PropsTypes = {
  message: PropsTypes.string,
};
