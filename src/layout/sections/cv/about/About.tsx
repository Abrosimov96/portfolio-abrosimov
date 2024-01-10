import styled from 'styled-components';
import { myTheme } from '../../../../styles/Theme.styled';
import { CVTitle } from '../CVTitle';

type AboutPropsType = {
  title: string;
  description: string;
};

export const About = (props: AboutPropsType) => {
  return (
    <StyledAbout>
      <CVTitle>{props.title}</CVTitle>
      <AboutDescription>{props.description}</AboutDescription>
    </StyledAbout>
  );
};

const StyledAbout = styled.div``;

const AboutDescription = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: ${myTheme.colors.grey.dark};
`;
