import styled from 'styled-components';
import { myTheme } from '../../styles/Theme.styled';

type SectionTitleProps = {
  title: string;
  text: string;
};

export const SectionTitle = (props: SectionTitleProps) => {
  return (
    <StyledSectionTitle>
      <Title>{props.title}</Title>
      <Text>{props.text}</Text>
    </StyledSectionTitle>
  );
};

export const StyledSectionTitle = styled.div`
  margin-bottom: 110px;
`;

export const Title = styled.h2`
  font-size: 48px;
  font-weight: 700;
  line-height: 0.5; /* 54.167% */
  color: ${myTheme.colors.secondary};
  text-align: center;
  margin-bottom: 50px;
`;

export const Text = styled.h3`
  font-size: 32px;
  font-weight: 400;
  line-height: 0.8; /* 81.25% */
  color: ${myTheme.colors.grey.dark};
  text-align: center;
`;
