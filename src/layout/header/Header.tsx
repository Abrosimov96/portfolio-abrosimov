import styled from 'styled-components';
import { Container } from '../../components/Container.styled';
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
      <Container>
        <FlexWrapper align="center" justify="space-between">
          <Logo />
          <FlexWrapper align="center" gap="50px">
            <Menu items={menuItems} />
            <Social items={socialItems} />
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
  padding: 40px 0 20px;
`;
