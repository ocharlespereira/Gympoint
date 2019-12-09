import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um email válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .min(6, 'No minímo 6 caracteres')
    .required('Insira uma senha válida'),
});

export default function SignIn() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <img src={logo} alt="" />

      <Form onSubmit={handleSubmit} schema={schema}>
        <small>SEU E-MAIL</small>
        <Input name="email" type="email" placeholder="exemplo@email.com" />

        <small>SUA SENHA</small>
        <Input name="password" type="password" placeholder="****************" />

        <button type="submit">Entrar no Sistema</button>
      </Form>
    </>
  );
}
