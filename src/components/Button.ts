import styled from 'styled-components';
import { myTheme } from '../styles/Theme.styled';

export const Button = styled.button`
  cursor: pointer;
  border-radius: 75px;
  padding: 20px;
  font-size: 16px;
  background-color: ${myTheme.colors.accent.light};
  color: ${myTheme.colors.accent.dark};
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${myTheme.colors.accent.dark};
    color: ${myTheme.colors.accent.light};
  }
`;
