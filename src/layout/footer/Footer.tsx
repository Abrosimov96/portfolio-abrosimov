import { Container } from '../../components/Container.styled';
import { Email } from '../../components/Email';
import { FlexWrapper } from '../../components/FlexWrapper';
import { Logo } from '../../components/logo/Logo';
import { Menu } from '../../components/menu/Menu';
import { Phone } from '../../components/Phone';
import { Social } from '../../components/social/Social';
import { S } from './Footer_Styles';

const socialItems = ['git-link', 'twitter', 'linkedIn'];

const menuItems = [
  'Home',
  'About',
  'Tech Stack',
  'Projects',
  'Contact',
];

export const Footer: React.FC = () => {
  return (
    <S.Footer>
      <Container>
        <S.FooterWrapper>
          <FlexWrapper
            justify="space-around"
            align="center"
            wrap="wrap"
            gap="20px">
            <Logo />
            <FlexWrapper
              wrap="wrap"
              gap="50px"
              justify="space-around"
              align="center">
              <Phone>+91 12345 09876</Phone>
              <Email>info@example.com</Email>
              <Social items={socialItems} />
            </FlexWrapper>
          </FlexWrapper>
        </S.FooterWrapper>
        <S.CopyrightWrapper>
          <FlexWrapper justify="space-between" align="center">
            <Menu items={menuItems} />
            <S.Copyright>
              Designed and built by <span>Pavan MG</span> with{' '}
              <span>Love</span> & <span>Coffee</span>
            </S.Copyright>
          </FlexWrapper>
        </S.CopyrightWrapper>
      </Container>
    </S.Footer>
  );
};
