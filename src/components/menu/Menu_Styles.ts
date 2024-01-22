import styled from 'styled-components';
import { myTheme } from '../../styles/Theme.styled';

const Menu = styled.nav`
  ul {
    display: flex;
    gap: 50px;
    justify-content: center;
    flex-wrap: wrap;
    li {
      a {
        color: ${myTheme.colors.grey.dark};
        transition: color 0.3s ease-in-out;
        &:hover {
          color: ${myTheme.colors.primary};
        }
      }
    }
  }
`;

export const S = {
  Menu,
};
