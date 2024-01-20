import { S } from '../Project_Styles';
import { ProjectDescription } from './description/ProjectDescription';

type ProjectPropsType = {
  imgSrc: string;
  title: string;
  text: string;
  techStack: string[];
  linkGit: string;
};

export const Project: React.FC<ProjectPropsType> = (
  props: ProjectPropsType,
) => {
  return (
    <S.Project>
      <S.ProjectImage src={props.imgSrc} />
      <ProjectDescription
        title={props.title}
        text={props.text}
        techStack={props.techStack}
        linkGit={props.linkGit}
      />
    </S.Project>
  );
};
