import styled from 'styled-components';
import { myTheme } from '../../styles/Theme.styled';

const Social = styled.ul`
  display: flex;
  gap: 20px;
  li {
    a {
      color: ${myTheme.colors.grey.dark};
      transition: color 0.3s ease-in-out;
      &:hover {
        color: ${myTheme.colors.secondary};
      }
    }
  }
`;

export const S = {
  Social,
};
