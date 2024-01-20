import styled from 'styled-components';
import { Container } from '../../../components/Container.styled';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { myTheme } from '../../../styles/Theme.styled';
import { About } from './about/About';
import { Education } from './education/Education';
import { Experience } from './experience/Experience';
import drawing from '../../../assets/images/drawing.svg';
import { useEffect, useState } from 'react';

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
    <StyledCV>
      <Container>
        <FlexWrapper justify="center">
          <CVContainer>
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
          </CVContainer>
          {width > breakpoint && (
            <CVWrapper>
              <img src={drawing} alt="drawing" />
            </CVWrapper>
          )}
        </FlexWrapper>
      </Container>
    </StyledCV>
  );
};

const StyledCV = styled.section`
  ${myTheme.sectionMarginBottom}
  position: relative;
`;

const CVContainer = styled.div`
  max-width: 710px;
`;

const CVWrapper = styled.div`
  width: 100%;
  img {
    position: absolute;
    right: 0;
  }
`;
