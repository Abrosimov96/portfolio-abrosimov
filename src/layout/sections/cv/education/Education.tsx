import styled from 'styled-components';
import { FlexWrapper } from '../../../../components/FlexWrapper';
import { CVTitle } from '../CVTitle';
import { Work } from '../experience/work/Work';

const educationItems = [
  {
    jobTitle: 'Bachelor in Electronics & Communication',
    company: 'Bangalore Instutute of Technology',
    type: 'Full Time',
    period: { from: 'Sep 2015', to: 'Dec 2020' },
  },
];

type EducationPropsType = {
  title: string;
};

export const Education = (props: EducationPropsType) => {
  return (
    <StyledEducation>
      <CVTitle>{props.title}</CVTitle>
      <FlexWrapper direction="column"></FlexWrapper>
      {educationItems.map((item) => (
        <Work {...item} />
      ))}
    </StyledEducation>
  );
};

const StyledEducation = styled.div``;
