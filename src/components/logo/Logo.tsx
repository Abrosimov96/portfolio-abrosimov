import styled from 'styled-components';
import { myTheme } from '../../styles/Theme.styled';
import { Icon } from '../icon/Icon';

export const Logo = () => {
  return (
    <Link href="#">
      <Icon
        iconId={'logo'}
        width="28"
        height="28"
        viewBox="0 0 28 28"
      />
    </Link>
  );
};

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
