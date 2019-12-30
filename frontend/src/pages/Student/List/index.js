import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';

import { Container } from '~/components/Grid';
import Title from '~/components/Title';
import { Table, Thead, Th, Tbody, Tr, Td } from '~/components/Table';
import InputSearch from '~/components/InputSearch';
import Loading from '~/components/Loading';
import { HeaderPage } from '~/components/HeaderPage/styles';
import { Controls } from '~/components/Controls/styles';
import colors from '~/styles/colors';

import {
  studentsSearchRequest,
  studentsDeleteRequest,
} from '~/store/modules/student/actions';

import ButtonLink from '~/components/ButtonLink';
import Alert from '~/util/alert';
import { Panel } from '~/components/Panel/styles';
import NoResultFound from '~/components/NoResultFound';
import Pagination from '~/components/Pagination';
import PaginationInfo from '~/components/Pagination/PaginationInfo';
import ButtonLikeLink from '~/components/ButtonLikeLink';

export default function StudentList() {
  const [termSearch, seTermSearch] = useState('');
  const students = useSelector(state => state.student.students);
  const loading = useSelector(state => state.student.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(studentsSearchRequest({ name: termSearch, page: 1 }));
  }, [dispatch, termSearch]);

  function handleSearcMain(value, page = 1) {
    seTermSearch(value);
    dispatch(studentsSearchRequest({ name: value, page }));
  }

  function handleDelete(id) {
    Alert.delete().then(result => {
      if (result.value) {
        dispatch(studentsDeleteRequest(id));
      }
    });
  }

  function handleLoadPage(page) {
    handleSearcMain(termSearch, page);
  }

  return (
    <Container>
      <HeaderPage>
        <Title>Gerenciando Alunos</Title>
        <Controls>
          <ButtonLink to="/alunos/new">
            <MdAdd size={24} color="#FFF" title="Adicionar Novo Aluno" />
            <span>Cadastrar</span>
          </ButtonLink>
        </Controls>
      </HeaderPage>
    </Container>
  );
}