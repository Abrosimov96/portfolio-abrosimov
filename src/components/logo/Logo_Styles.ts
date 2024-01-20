import styled from 'styled-components';
import { myTheme } from '../../styles/Theme.styled';

const Link = styled.a`
  position: relative;
  z-index: 1;
  &::before {
    content: '';
    display: inline-block;
    width: 50px;
    height: 50px;
    background-image: linear-gradient(${myTheme.colors.gradient});
    border-radius: 50%;

    position: absolute;
    z-index: -1;

    top: -11px;
    left: -11px;
  }
`;

export const S = {
  Link,
};
