import React from 'react';
import { MdSearch } from 'react-icons/md';
import { Container, Message } from './styles';

export default function NoResultFound() {
  return (
    <Container>
      <MdSearch size={36} color="black" />
      <Message>Nenhum registro encontrado.</Message>
    </Container>
  );
}
