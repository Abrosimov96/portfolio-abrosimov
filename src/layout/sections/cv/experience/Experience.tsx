import { CVTitle } from '../CVTitle';
import { S } from '../CV_Styles';
import { Progress } from '../progress/Progress';
import { Slide } from 'react-awesome-reveal';

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
      <Slide cascade={true} damping={0.25} triggerOnce={true}>
        {workItems.map((item, index) => (
          <Progress key={index} {...item} />
        ))}
      </Slide>
    </S.Experience>
  );
};
