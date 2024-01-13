import styled from 'styled-components';
import { SectionTitle } from '../SectionTitle';
import { Project } from './project/Project';
import project1 from '../../../assets/images/creative_agency.webp';
import project2 from '../../../assets/images/proj2.webp';
import project3 from '../../../assets/images/proj3.webp';
import project4 from '../../../assets/images/proj4.webp';
import project5 from '../../../assets/images/proj5.webp';
import project6 from '../../../assets/images/proj6.webp';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container.styled';
import { myTheme } from '../../../styles/Theme.styled';

const projectsItems = [
  {
    imgSrc: project1,
    title: 'Creative Agency',
    text: 'This is sample project description random things are here in description ',
    techStack: ['HTML', 'StyledComponents', 'React', 'TypeScript'],
    linkGit: 'https://github.com/Abrosimov96/creative-agency',
  },
  {
    imgSrc: project2,
    title: 'Project Tile goes here',
    text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
    techStack: ['HTML', 'Git', 'SASS', 'React'],
    linkGit: 'https://github.com/Abrosimov96/creative-agency',
  },
  {
    imgSrc: project3,
    title: 'Project Tile goes here',
    text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
    techStack: ['HTML', 'Tailwind', 'VsCode', 'React'],
    linkGit: 'https://github.com/Abrosimov96/creative-agency',
  },
  {
    imgSrc: project4,
    title: 'Project Tile goes here',
    text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
    techStack: ['TypeScript', 'JavaScript', 'SASS', 'React'],
    linkGit: 'https://github.com/Abrosimov96/creative-agency',
  },
  {
    imgSrc: project5,
    title: 'Project Tile goes here',
    text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
    techStack: ['HTML', 'JavaScript', 'SASS', 'React'],
    linkGit: 'https://github.com/Abrosimov96/creative-agency',
  },
  {
    imgSrc: project6,
    title: 'Project Tile goes here',
    text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
    techStack: ['HTML', 'JavaScript', 'SASS', 'React'],
    linkGit: 'https://github.com/Abrosimov96/creative-agency',
  },
];

export const Projects = () => {
  return (
    <StyledProjects id="Projects">
      <Container>
        <SectionTitle
          title="Projects"
          text="Things I’ve built so far"
        />
        <FlexWrapper wrap="wrap" columnGap="34px">
          {projectsItems.map((item, index) => (
            <Project {...item} />
          ))}
        </FlexWrapper>
      </Container>
    </StyledProjects>
  );
};

const StyledProjects = styled.section`
  line-height: 12px;
  ${myTheme.sectionMarginBottom}
`;
