import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Container } from '../../../components/Container.styled';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Icon } from '../../../components/icon/Icon';
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
  'git',
  'sass',
  'vscode',
  'github',
];

export const Skills = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 768;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);

    return () =>
      window.removeEventListener('resize', handleWindowResize);
  }, []);
  return (
    <StyledSkills id="Tech Stack">
      <Container>
        <SectionTitle
          title="My Tech Stack"
          text="Technologies I’ve been working with recently"
        />
        {width < breakpoint ? (
          <MobileSkills>
            {skillsItems.map((item, index) => (
              <MobileSkill key={index}>
                <Icon
                  iconId={item}
                  width="100"
                  height="100"
                  viewBox="0 0 120 110"
                />
                {item}
              </MobileSkill>
            ))}
          </MobileSkills>
        ) : (
          <FlexWrapper justify="space-around" wrap="wrap" gap="150px">
            {skillsItems.map((item, index) => (
              <Skill key={index} title={item} />
            ))}
          </FlexWrapper>
        )}
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

const MobileSkills = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const MobileSkill = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 28px;

  font-weight: 400;
  line-height: 1.5; /* 140% */
  letter-spacing: 1px;

  text-transform: uppercase;
`;
