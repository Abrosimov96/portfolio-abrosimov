import styled from 'styled-components';
import { myTheme } from '../../../styles/Theme.styled';
// CV
const CV = styled.section`
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

// About
const About = styled.div``;

const AboutDescription = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: ${myTheme.colors.grey.dark};
`;

// Expirience
const Experience = styled.div``;

// Progress
const Progress = styled.div`
  border-bottom: 2px solid #ebeaed;
  margin-bottom: 30px;
  padding-bottom: 25px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const ProgressTitle = styled.h5`
  font-size: 20px;
  font-weight: 400;
  line-height: 1.4; /* 140% */
  letter-spacing: 1px;
  color: ${myTheme.colors.grey.dark};
`;

const ProgressInfoWrapper = styled.div`
  min-width: 320px;
  display: flex;
  justify-content: space-between;
`;

const ProgressInfo = styled.span`
  font-size: 12px;
  font-weight: 500;
  line-height: 2.4; /* 233.333% */
  letter-spacing: 1px;
  color: ${myTheme.colors.grey.light};
`;

const ProgressType = styled.span`
  color: ${myTheme.colors.accent.dark};
  display: inline-block;
  width: 84px;
  height: 24px;
  font-size: 9px;
  font-weight: 600;
  line-height: 2.9;
  background-color: ${myTheme.colors.accent.light};
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Education
const Education = styled.div``;

export const S = {
  CV,
  CVContainer,
  CVWrapper,
  About,
  AboutDescription,
  Experience,
  ProgressType,
  ProgressInfo,
  ProgressInfoWrapper,
  ProgressTitle,
  Progress,
  Education,
};
