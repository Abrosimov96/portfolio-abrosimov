import styled from 'styled-components';
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

const StyledAbout = styled.div`
  border: 1px solid red;
`;

const AboutDescription = styled.p``;
