import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Form } from '@rocketseat/unform';
import { MdArrowBack, MdDone } from 'react-icons/md';
import * as Yup from 'yup';

import colors from '~/styles/colors';

import { Container, Row, Column } from '~/components/Grid';
import Title from '~/components/Title';
import { HeaderPage } from '~/components/HeaderPage/styles';
import { Controls } from '~/components/Controls/styles';
import ButtonLink from '~/components/Button';
import Button from '~/components/Button';
import { Painel } from '~/components/Panel/styles';
import { FormGroup } from '~/components/FormGroup/styles';

import Input from '~/components/Input';
import Label from '~/components/Label';

import { studentsSaveRequest } from '~/store/modules/student/actions';
import api from '~/services/api';

const schema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório.'),
  email: Yup.string()
    .email('Insira um e-mail válido.')
    .required('O e-mail é obrigatório.'),
  age: Yup.number()
    .min(0, 'A idade deve ser maior ou igual a 0')
    .required('A idade é obrigatória.'),
  weight: Yup.number().required('O peso é obrigatório.'),
  height: Yup.number().required('A altura é obrigatória.'),
});
export default function StudentForm() {
  const { id } = useParams();
  const [student, setStudent] = useState({});
  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(studentsSaveRequest({ ...data, id }));
  }

  useEffect(() => {
    if (id) {
      async function loadStudent() {
        const response = await api.get(`student/${id}`);
        setStudent(response.data);
      }

      loadStudent();
    }
  }, [id]);

  return (
    <Container>
      <HeaderPage />
    </Container>
  );
}
