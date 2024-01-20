import styled from 'styled-components';
import { myTheme } from '../../styles/Theme.styled';

const Menu = styled.nav`
  ul {
    display: flex;
    gap: 50px;
    justify-content: center;
    flex-wrap: wrap;
    li {
      color: ${myTheme.colors.grey.dark};
    }
  }
`;

export const S = {
  Menu,
};
