import styled from 'styled-components';
import { ProjectDescription } from './description/ProjectDescription';

type ProjectPropsType = {
  imgSrc: string;
  title: string;
  text: string;
  techStack: string[];
};

export const Project = (props: ProjectPropsType) => {
  return (
    <StyledProject>
      <ProjectImage src={props.imgSrc} />
      <ProjectDescription
        title={props.title}
        text={props.text}
        techStack={props.techStack}
      />
    </StyledProject>
  );
};

const StyledProject = styled.div`
  width: 375px;
  background-color: snow;
  border-radius: 20px;
  overflow: hidden;

  box-shadow: 2px 2px 100px 0px rgba(0, 0, 0, 0.2);
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`;
