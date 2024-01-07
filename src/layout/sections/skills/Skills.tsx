import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from '../SectionTitle';
import { Skill } from './skill/Skill';

const skillsItems = [
  'html',
  'css',
  'js',
  'react',
  'redux',
  'tailwind',
  'git-icon',
  'sass',
  'vscode',
  'github',
];

export const Skills = () => {
  return (
    <StyledSkills>
      <SectionTitle
        title="My Tech Stack"
        text="Technologies I’ve been working with recently"
      />
      <FlexWrapper justify="space-between" wrap="wrap" gap="100px">
        {skillsItems.map((item, index) => (
          <Skill key={index} title={item} />
        ))}
      </FlexWrapper>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 200px;
  background-color: #efa6ff;
`;
