import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Container } from '../../components/Container.styled';
import { FlexWrapper } from '../../components/FlexWrapper';
import { Logo } from '../../components/logo/Logo';
import { Menu } from '../../components/menu/Menu';

import { Social } from '../../components/social/Social';
import { MobileMenu } from './mobileMenu/MobileMenu';

const menuItems = [
  'Home',
  'About',
  'Tech Stack',
  'Projects',
  'Contact',
];

const socialItems = ['git-link', 'twitter', 'linkedIn'];

export const Header = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 769;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);

    return () =>
      window.removeEventListener('resize', handleWindowResize);
  }, []);
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper align="center" justify="space-between">
          <Logo />
          <FlexWrapper align="center" gap="50px">
            {width < breakpoint ? (
              <>
                <Social items={socialItems} />
                <MobileMenu items={menuItems} />
              </>
            ) : (
              <>
                <Menu items={menuItems} />
                <Social items={socialItems} />
              </>
            )}
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background: linear-gradient(#2c2c2c80, #ffffff00 90%);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
  padding: 40px 0 20px;
`;
