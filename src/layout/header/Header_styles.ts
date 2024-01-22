import styled, { css } from 'styled-components';
import { myTheme } from '../../styles/Theme.styled';

const Header = styled.header`
  background: linear-gradient(#2c2c2c80, #ffffff00 90%);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
  padding: 40px 0 20px;
`;

const MobileMenu = styled.nav``;

const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  cursor: pointer;
  top: 28px;
  right: 0px;
  width: 50px;
  height: 50px;
  z-index: 999999;
  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${myTheme.colors.primary};
    position: absolute;
    left: 10px;
    top: 50%;

    ${(props) =>
      props.isOpen &&
      css<{ isOpen: boolean }>`
        background-color: rgba(255, 255, 255, 0);
      `}

    &::before {
      content: '';
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${myTheme.colors.primary};
      position: absolute;
      transform: translateY(-10px);

      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: rotate(-45deg) translateY(0px);
        `}
    }

    &::after {
      content: '';
      display: block;
      width: 24px;
      height: 2px;
      background-color: ${myTheme.colors.primary};
      position: absolute;
      transform: translateY(10px);

      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          width: 36px;
          transform: rotate(45deg) translateY(0px);
        `}
    }
  }
`;

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99999;
  background-color: rgba(31, 31, 31, 0.9);
  display: none;

  ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      display: flex;
      justify-content: center;
      align-items: center;
    `}

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
    li {
      a {
        color: ${myTheme.colors.primary};
        font-size: 30px;
      }
    }
  }
`;

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
  Header,
  MobileMenu,
  BurgerButton,
  MobileMenuPopup,
  Menu,
};
