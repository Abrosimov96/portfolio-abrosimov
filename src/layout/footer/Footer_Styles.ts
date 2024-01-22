import styled from 'styled-components';
import { FlexWrapper } from '../../components/FlexWrapper';
import { myTheme } from '../../styles/Theme.styled';

const Footer = styled.footer``;

const Copyright = styled.p`
  text-align: center;
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

export const S = {
  CopyrightWrapper,
  FooterWrapper,
  Copyright,
  Footer,
};
