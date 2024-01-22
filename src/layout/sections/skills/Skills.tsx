import { useEffect, useState } from 'react';
import { Container } from '../../../components/Container.styled';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Icon } from '../../../components/icon/Icon';
import { SectionTitle } from '../SectionTitle';
import { S } from './Skills_Styles';
import { Fade } from 'react-awesome-reveal';

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

export const Skills: React.FC = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 768;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);

    return () =>
      window.removeEventListener('resize', handleWindowResize);
  }, []);
  return (
    <S.Skills id="Tech Stack">
      <Container>
        <SectionTitle
          title="My Tech Stack"
          text="Technologies I’ve been working with recently"
        />
        {width < breakpoint ? (
          <S.MobileSkills>
            <Fade cascade={true} damping={0.25} triggerOnce={true}>
              {skillsItems.map((item, index) => (
                <S.MobileSkill key={index}>
                  <Icon
                    iconId={item}
                    width="100"
                    height="100"
                    viewBox="0 0 120 110"
                  />
                  {item}
                </S.MobileSkill>
              ))}
            </Fade>
          </S.MobileSkills>
        ) : (
          <FlexWrapper justify="space-around" wrap="wrap" gap="150px">
            <Fade cascade={true} damping={0.25} triggerOnce={true}>
              {skillsItems.map((item, index) => (
                <Icon
                  key={index}
                  iconId={item}
                  width="100"
                  height="100"
                  viewBox="0 0 120 110"
                />
              ))}
            </Fade>
          </FlexWrapper>
        )}
      </Container>
    </S.Skills>
  );
};
