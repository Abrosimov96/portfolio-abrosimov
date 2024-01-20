import styled from 'styled-components';
import { myTheme } from '../../../styles/Theme.styled';

const Skills = styled.section`
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

export const S = {
  MobileSkill,
  MobileSkills,
  Skills,
};
