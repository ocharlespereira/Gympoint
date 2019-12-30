import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import colors from '~/styles/colors';

import logo from '~/assets/logo-header.svg';

import { Container, Content, Menu, Profile } from './styles';
import { signOut } from '~/store/modules/auth/actions';
// import Notifications from '../Notifications';

export default function Header() {
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <Link to="/">
            <img src={logo} alt="Gympoint" />
          </Link>

          <ul>
            <li>
              <Menu activeStyle="" to="/alunos">
                ALUNOS
              </Menu>
            </li>
            <li>
              <Menu activeStyle="" to="/alunos">
                Alunos
              </Menu>
            </li>
            <li>
              <Menu activeStyle="" to="/alunos">
                Alunos
              </Menu>
            </li>
            <li>
              <Menu activeStyle="" to="/alunos">
                Alunos
              </Menu>
            </li>
          </ul>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <span onClick={handleSignOut}>sair do sistema</span>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
