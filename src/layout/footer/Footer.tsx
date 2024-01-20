import styled from 'styled-components';
import { Container } from '../../components/Container.styled';
import { Email } from '../../components/Email';
import { FlexWrapper } from '../../components/FlexWrapper';
import { Logo } from '../../components/logo/Logo';
import { Menu } from '../../components/menu/Menu';

import { Phone } from '../../components/Phone';
import { Social } from '../../components/social/Social';
import { myTheme } from '../../styles/Theme.styled';

const socialItems = ['git', 'twitter', 'linkedIn'];

const menuItems = [
  'Home',
  'About',
  'Tech Stack',
  'Projects',
  'Contact',
];

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <FooterWrapper>
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
        </FooterWrapper>
        <CopyrightWrapper>
          <FlexWrapper justify="space-between" align="center">
            <Menu items={menuItems} />
            <Copyright>
              Designed and built by <span>Pavan MG</span> with{' '}
              <span>Love</span> & <span>Coffee</span>
            </Copyright>
          </FlexWrapper>
        </CopyrightWrapper>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer``;

const Copyright = styled.p`
  color: ${myTheme.colors.grey.dark};
  font-size: 18px;
  font-weight: 400;
  line-height: 1.4; /* 144.444% */
  span {
    background-image: linear-gradient(
      90deg,
      #13b0f5 -2.06%,
      #e70faa 100%
    );
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const FooterWrapper = styled.div`
  padding-bottom: 50px;
  border-bottom: 2px solid ${myTheme.colors.grey.light};
`;

const CopyrightWrapper = styled.div`
  padding: 45px 0 60px;
  @media screen and (max-width: 1015px) {
    ${FlexWrapper} {
      flex-direction: column;
      gap: 20px;
    }
  }
`;
