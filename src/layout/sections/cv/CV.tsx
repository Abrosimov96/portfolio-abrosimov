import styled from 'styled-components';
import { Container } from '../../../components/Container.styled';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { myTheme } from '../../../styles/Theme.styled';
import { About } from './about/About';
import { Education } from './education/Education';
import { Experience } from './experience/Experience';

export const CV = () => {
  return (
    <StyledCV>
      <Container>
        <FlexWrapper justify="space-between">
          <CVContainer>
            <FlexWrapper direction="column" gap="38px">
              <About
                title={'About Me'}
                description={
                  'The Generator App is an online tool that helps you to export ready-made templates ready to work as your future website. It helps you to combine slides, panels and other components and export it as a set of static files: HTML/CSS/JS.'
                }
              />
              <Experience title={'Work Experience'} />
              <Education title={'Education'} />
            </FlexWrapper>
          </CVContainer>
          <CVWrapper />
        </FlexWrapper>
      </Container>
    </StyledCV>
  );
};

const StyledCV = styled.section`
  ${myTheme.sectionMarginBottom}
`;

const CVContainer = styled.div`
  max-width: 710px;
`;

const CVWrapper = styled.div`
  width: 100%;
`;
