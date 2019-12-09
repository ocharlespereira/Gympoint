import React from 'react';
import { Form, Input } from '@rocketseat/unform'

import logo from '~/assets/logo.svg';

export default function SignIn() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <img src={logo} alt="" />

      <Form onSubmit={handleSubmit}>
        <span>SEU E-MAIL</span>
        <Input name="email" type="email" placeholder="exemplo@email.com" />

        <span>SUA SENHA</span>
        <Input name="passwordd" type="password" placeholder="****************" />

        <button type="submit">Entrar no Sistema</button>
      </Form>
    </>
  );
}
