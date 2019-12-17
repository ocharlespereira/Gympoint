import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um email válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .min(6, 'No mínimo 6 caracteres')
    .required('Insira uma senha válida'),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <img src={logo} alt="" />

      <Form onSubmit={handleSubmit} schema={schema}>
        <small>SEU E-MAIL</small>
        <Input name="email" type="email" placeholder="exemplo@email.com" />

        <small>SUA SENHA</small>
        <Input
          name="password"
          type="password"
          placeholder="Entre com a sua senha"
        />

        <button type="submit">
          {loading ? 'Carregando...' : 'Entrar no Sistema'}
        </button>
      </Form>
    </>
  );
}
