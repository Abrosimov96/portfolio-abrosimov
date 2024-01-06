import styled from 'styled-components';
import { FlexWrapper } from '../../../../../components/FlexWrapper';
import { Icon } from '../../../../../components/icon/Icon';
import { myTheme } from '../../../../../styles/Theme.styled';

type ProjectDescriptionPropsType = {
  title: string;
  text: string;
  techStack: string[];
};

export const ProjectDescription = (
  props: ProjectDescriptionPropsType,
) => {
  return (
    <StyledDescription>
      <Title>{props.title}</Title>
      <Text>{props.text}</Text>
      <TechStack>
        TechStack:{' '}
        {props.techStack.map((stack, index, arr) => (
          <Stack key={stack}>
            {stack}
            {arr.length - 1 !== index && ', '}
          </Stack>
        ))}
      </TechStack>
      <FlexWrapper justify="space-between">
        <FlexWrapper>
          <Icon
            iconId={'link'}
            width="20"
            height="20"
            viewBox="0 0 20 20"
          />
          <Link href="">Live Preview</Link>
        </FlexWrapper>
        <FlexWrapper>
          <Icon
            iconId={'linkGit'}
            width="20"
            height="20"
            viewBox="0 0 20 20"
          />
          <Link href="">View Code</Link>
        </FlexWrapper>
      </FlexWrapper>
    </StyledDescription>
  );
};

const StyledDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 25px 30px 27px 30px;
`;

const Title = styled.h5`
  color: ${myTheme.colors.project};
`;

const Text = styled.p`
  color: ${myTheme.colors.grey.dark};
`;

const TechStack = styled.span`
  color: ${myTheme.colors.grey.dark};
`;

const Stack = styled.span``;

const Link = styled.a`
  color: ${myTheme.colors.project};
`;
