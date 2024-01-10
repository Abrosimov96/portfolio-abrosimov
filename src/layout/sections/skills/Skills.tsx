import styled from 'styled-components';
import { Container } from '../../../components/Container.styled';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { myTheme } from '../../../styles/Theme.styled';
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
      <Container>
        <SectionTitle
          title="My Tech Stack"
          text="Technologies I’ve been working with recently"
        />
        <FlexWrapper justify="space-around" wrap="wrap" gap="150px">
          {skillsItems.map((item, index) => (
            <Skill key={index} title={item} />
          ))}
        </FlexWrapper>
      </Container>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${myTheme.sectionMarginBottom}
`;
