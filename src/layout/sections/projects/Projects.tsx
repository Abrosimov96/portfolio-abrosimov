import styled from 'styled-components';
import { SectionTitle } from '../SectionTitle';
import { Project } from './project/Project';
import project1 from '../../../assets/images/proj1.webp';
import project2 from '../../../assets/images/proj2.webp';
import project3 from '../../../assets/images/proj3.webp';
import project4 from '../../../assets/images/proj4.webp';
import project5 from '../../../assets/images/proj5.webp';
import project6 from '../../../assets/images/proj6.webp';
import { FlexWrapper } from '../../../components/FlexWrapper';

const projectsItems = [
  {
    imgSrc: project1,
    title: 'Project Tile goes here',
    text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
    techStack: ['HTML', 'JavaScript', 'SASS', 'React', 'TypeScript'],
  },
  {
    imgSrc: project2,
    title: 'Project Tile goes here',
    text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
    techStack: ['HTML', 'Git', 'SASS', 'React'],
  },
  {
    imgSrc: project3,
    title: 'Project Tile goes here',
    text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
    techStack: ['HTML', 'Tailwind', 'VsCode', 'React'],
  },
  {
    imgSrc: project4,
    title: 'Project Tile goes here',
    text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
    techStack: ['TypeScript', 'JavaScript', 'SASS', 'React'],
  },
  {
    imgSrc: project5,
    title: 'Project Tile goes here',
    text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
    techStack: ['HTML', 'JavaScript', 'SASS', 'React'],
  },
  {
    imgSrc: project6,
    title: 'Project Tile goes here',
    text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
    techStack: ['HTML', 'JavaScript', 'SASS', 'React'],
  },
];

export const Projects = () => {
  return (
    <StykedProjects>
      <SectionTitle
        title="Projects"
        text="Things I’ve built so far"
      />
      <FlexWrapper gap="34px" wrap="wrap" justify="space-around">
        {projectsItems.map((item, index) => (
          <Project {...item} />
        ))}
      </FlexWrapper>
    </StykedProjects>
  );
};

const StykedProjects = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: #fff;
`;
