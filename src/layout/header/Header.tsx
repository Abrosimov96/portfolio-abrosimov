import styled from 'styled-components';
import { FlexWrapper } from '../../components/FlexWrapper';
import { Logo } from '../../components/logo/Logo';
import { Menu } from '../../components/menu/Menu';
import { Social } from '../../components/social/Social';

const menuItems = [
  'Home',
  'About',
  'Tech Stack',
  'Projects',
  'Contact',
];

const socialItems = ['git', 'twitter', 'linkedIn'];

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <FlexWrapper align="center" gap="50px">
        <Menu items={menuItems} />
        <Social items={socialItems} />
      </FlexWrapper>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: #faca7e;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
