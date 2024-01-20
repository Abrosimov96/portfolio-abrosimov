import { useEffect, useState } from 'react';
import { Container } from '../../components/Container.styled';
import { FlexWrapper } from '../../components/FlexWrapper';
import { Logo } from '../../components/logo/Logo';
import { Menu } from '../../components/menu/Menu';
import { Social } from '../../components/social/Social';
import { S } from './Header_styles';
import { MobileMenu } from './mobileMenu/MobileMenu';

const menuItems = [
  'Home',
  'About',
  'Tech Stack',
  'Projects',
  'Contact',
];

const socialItems = ['git-link', 'twitter', 'linkedIn'];

export const Header: React.FC = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 769;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);

    return () =>
      window.removeEventListener('resize', handleWindowResize);
  }, []);

  return (
    <S.Header>
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
    </S.Header>
  );
};
