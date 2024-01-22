import { Container } from '../../../components/Container.styled';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { About } from './about/About';
import { Education } from './education/Education';
import { Experience } from './experience/Experience';
import drawing from '../../../assets/images/drawing.svg';
import { useEffect, useState } from 'react';
import { S } from './CV_Styles';

export const CV: React.FC = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 992;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);

    return () =>
      window.removeEventListener('resize', handleWindowResize);
  }, []);
  return (
    <S.CV id="About">
      <Container>
        <FlexWrapper justify="center">
          <S.CVContainer>
            <FlexWrapper direction="column" gap="38px">
              <About
                title={'About Me'}
                description={
                  'As an experienced frontend specialist, I am a master in web development, deeply understanding HTML, CSS, and JavaScript. My successful projects, where I utilized frameworks like React and Angular, attest to my expertise in creating modern and responsive user interfaces. My skills in optimizing performance and attention to detail make me a sought-after professional in crafting efficient and intuitively designed user interfaces.'
                }
              />
              <Experience title={'Work Experience'} />
              <Education title={'Education'} />
            </FlexWrapper>
          </S.CVContainer>
          {width > breakpoint && (
            <S.CVWrapper>
              <img src={drawing} alt="drawing" />
            </S.CVWrapper>
          )}
        </FlexWrapper>
      </Container>
    </S.CV>
  );
};
