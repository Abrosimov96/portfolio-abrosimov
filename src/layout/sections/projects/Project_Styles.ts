import styled from 'styled-components';
import { myTheme } from '../../../styles/Theme.styled';

// Projects
const Projects = styled.section`
  line-height: 12px;
  ${myTheme.sectionMarginBottom}
`;

// Project
const Project = styled.div`
  max-width: 375px;
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 2px 2px 100px 0px rgba(0, 0, 0, 0.2);
  margin-bottom: 62px;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`;

// Description

const Description = styled.div`
  display: flex;
  height: calc(100% - 260px);
  flex-direction: column;
  gap: 20px;
  padding: 25px 30px;
`;

const Title = styled.h4`
  font-size: 28px;
  font-weight: 500;
  line-height: 26px; /* 92.857% */
  margin-bottom: 17px;
  color: ${myTheme.colors.project};
`;

const DescriptionWrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`;

const Text = styled.p`
  font-size: 18px;
  font-weight: 300;
  line-height: 26px; /* 144.444% */
  margin-bottom: 12px;
  color: ${myTheme.colors.grey.dark};
`;

const TechStack = styled.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  color: ${myTheme.colors.grey.dark};
`;

const StackWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 21px;
`;

const Stack = styled.span``;

const Link = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px; /* 162.5% */
  text-decoration-line: underline;
  color: ${myTheme.colors.project};
`;

export const S = {
  Projects,
  Project,
  ProjectImage,
  Link,
  Stack,
  StackWrapper,
  TechStack,
  Text,
  DescriptionWrapper,
  Title,
  Description,
};
