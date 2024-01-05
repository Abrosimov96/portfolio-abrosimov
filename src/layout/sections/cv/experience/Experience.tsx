import styled from 'styled-components';
import { FlexWrapper } from '../../../../components/FlexWrapper';
import { Work } from './work/Work';
import { CVTitle } from '../CVTitle';

const workItems = [
  {
    jobTitle: 'Junior Web Developer',
    company: 'Dr. Rajkumar’s Learning App',
    location: 'Bengaluru',
    type: 'Full Time',
    period: { from: 'Sep 2021', to: 'Dec 2021' },
  },
  {
    jobTitle: 'Web Development Intern',
    company: 'IonPixelz Web Solutions',
    location: 'Bengaluru',
    type: 'Intership',
    period: { from: 'Sep 2021', to: 'Dec 2021' },
  },
  {
    jobTitle: 'SEO/SEM Specialist',
    company: 'HAAPS',
    location: 'Bengaluru',
    type: 'Intership',
    period: { from: 'Sep 2021', to: 'Dec 2021' },
  },
];

type ExperiencePropsType = {
  title: string;
};

export const Experience = (props: ExperiencePropsType) => {
  return (
    <StyledExperience>
      <CVTitle>{props.title}</CVTitle>
      <FlexWrapper direction="column"></FlexWrapper>
      {workItems.map((item) => (
        <Work {...item} />
      ))}
    </StyledExperience>
  );
};

const StyledExperience = styled.div`
  border: 1px solid red;
`;
