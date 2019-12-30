import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import colors from '~/styles/colors';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
  border: 1px solid ${colors.border};
`;

export const Content = styled.div`
  height: 64px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid ${colors.border};
    }

    ul {
      display: flex;
      justify-content: center;
      align-items: center;

      li {
        &: nth-child(1) {
          margin-left: 30px;
        }
        margin-right: 20px;
      }
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Menu = styled(NavLink).attrs(props => ({}))`
  font-weight: bold;
  color: ${colors.placeholder};
`;
export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: ${colors.strong};
    }

    span {
      cursor: pointer;
      color: ${colors.red};
    }
  }
`;
