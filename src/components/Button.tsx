import styled from 'styled-components';
import { myTheme } from '../styles/Theme.styled';

export const Button = styled.button`
  max-width: 150px;
  border-radius: 75px;
  padding: 20px;
  background-color: ${myTheme.colors.accent.light};
  color: ${myTheme.colors.accent.dark};
`;
