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
  color: ${myTheme.colors.secondary};
  text-align: center;
`;

export const Text = styled.h3`
  color: ${myTheme.colors.grey.dark};
  text-align: center;
`;
