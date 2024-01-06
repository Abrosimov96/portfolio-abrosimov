import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { About } from './about/About';
import { Education } from './education/Education';
import { Experience } from './experience/Experience';

export const CV = () => {
  return (
    <StyledCV>
      <FlexWrapper justify="space-between">
        <FlexWrapper direction="column" gap="20px">
          <About
            title={'About Me'}
            description={
              'The Generator App is an online tool that helps you to export ready-made templates ready to work as your future website. It helps you to combine slides, panels and other components and export it as a set of static files: HTML/CSS/JS.'
            }
          />
          <Experience title={'Work Experience'} />
          <Education title={'Education'} />
        </FlexWrapper>
        <CVWrapper />
      </FlexWrapper>
    </StyledCV>
  );
};

const StyledCV = styled.section`
  min-height: 100vh;
  background-color: #b2ecff;
`;

const CVWrapper = styled.section`
  min-width: 400px;
  border: 1px solid yellow;
`;
