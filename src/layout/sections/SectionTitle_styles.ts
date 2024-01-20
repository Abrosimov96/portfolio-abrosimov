import styled from 'styled-components';
import { myTheme } from '../../styles/Theme.styled';

const SectionTitle = styled.div`
  margin-bottom: 110px;
`;

const Title = styled.h2`
  font-size: 48px;
  font-weight: 700;
  line-height: 1; /* 54.167% */
  color: ${myTheme.colors.secondary};
  text-align: center;
  margin-bottom: 50px;
`;

const Text = styled.h3`
  font-size: 32px;
  font-weight: 400;
  line-height: 1; /* 81.25% */
  color: ${myTheme.colors.grey.dark};
  text-align: center;
`;

export const S = {
  Text,
  Title,
  SectionTitle,
};
