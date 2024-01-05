import styled from 'styled-components';
import { FlexWrapper } from '../../components/FlexWrapper';
import { Logo } from '../../components/logo/Logo';
import { Menu } from '../../components/menu/Menu';
import { Social } from '../../components/social/Social';

const menuItems = [
  'Home',
  'Skills',
  'Works',
  'Testimony',
  'Contacts',
];

const socialItems = ['git', 'facebook', 'linkedIn'];

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
  justify-content: space-between;
  align-items: center;
`;