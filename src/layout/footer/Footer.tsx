import { Container } from '../../components/Container.styled';
import { Email } from '../../components/Email';
import { FlexWrapper } from '../../components/FlexWrapper';
import { Logo } from '../../components/logo/Logo';
import { Menu } from '../header/menu/Menu';
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
              <Email>abrosimov0423@gmail.com</Email>
              <Social items={socialItems} />
            </FlexWrapper>
          </FlexWrapper>
        </S.FooterWrapper>
        <S.CopyrightWrapper>
          <S.Copyright>
            Designed and built by <span>Anton Abrosimov</span> with{' '}
            <span>Love</span> & <span>Coffee</span>
          </S.Copyright>
        </S.CopyrightWrapper>
      </Container>
    </S.Footer>
  );
};
