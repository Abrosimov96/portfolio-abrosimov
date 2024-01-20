import { FlexWrapper } from '../../../../components/FlexWrapper';
import { CVTitle } from '../CVTitle';
import { S } from '../CV_Styles';
import { Progress } from '../progress/Progress';

const educationItems = [
  {
    jobTitle: `Bachelor's degree Informatics & Computer Science`,
    company: 'Burgas Free University',
    type: 'Full Time',
    period: { from: 'Sep 2013', to: 'June 2018' },
  },
  {
    jobTitle: `Master of Artificial Intelligence & Robotics`,
    company: 'Burgas Free University',
    type: 'Full Time',
    period: { from: 'Sep 2018', to: 'June 2020' },
  },
];

type EducationPropsType = {
  title: string;
};

export const Education = (props: EducationPropsType) => {
  return (
    <S.Education>
      <CVTitle>{props.title}</CVTitle>
      <FlexWrapper direction="column"></FlexWrapper>
      {educationItems.map((item) => (
        <Progress {...item} />
      ))}
    </S.Education>
  );
};
