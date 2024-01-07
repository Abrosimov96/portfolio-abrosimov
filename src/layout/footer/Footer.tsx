import styled from 'styled-components';
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
    <>
      <StyledFooter>
        <FlexWrapper justify="space-around" align="center">
          <Logo />
          <FlexWrapper gap="50px" align="center">
            <Phone>+91 12345 09876</Phone>
            <Email>info@example.com</Email>
            <Social items={socialItems} />
          </FlexWrapper>
        </FlexWrapper>
        <hr />
        <FlexWrapper justify="space-around" align="center">
          <Menu items={menuItems} />
          <Copyright>
            Designed and built by <span>Pavan MG</span> with{' '}
            <span>Love</span> & <span>Coffee</span>
          </Copyright>
        </FlexWrapper>
      </StyledFooter>
    </>
  );
};

const StyledFooter = styled.footer`
  background-color: #98faff;
`;

const Copyright = styled.p`
  color: ${myTheme.colors.grey.dark};
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
