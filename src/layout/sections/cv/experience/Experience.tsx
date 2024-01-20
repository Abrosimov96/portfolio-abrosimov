import { CVTitle } from '../CVTitle';
import { S } from '../CV_Styles';
import { Progress } from '../progress/Progress';

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

export const Experience: React.FC<ExperiencePropsType> = (
  props: ExperiencePropsType,
) => {
  return (
    <S.Experience>
      <CVTitle>{props.title}</CVTitle>
      {workItems.map((item) => (
        <Progress {...item} />
      ))}
    </S.Experience>
  );
};
