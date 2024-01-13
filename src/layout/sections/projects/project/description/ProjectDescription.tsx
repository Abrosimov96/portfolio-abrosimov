import styled from 'styled-components';
import { FlexWrapper } from '../../../../../components/FlexWrapper';
import { Icon } from '../../../../../components/icon/Icon';
import { myTheme } from '../../../../../styles/Theme.styled';

type ProjectDescriptionPropsType = {
  title: string;
  text: string;
  techStack: string[];
  linkGit: string;
};

export const ProjectDescription = (
  props: ProjectDescriptionPropsType,
) => {
  return (
    <StyledDescription>
      <Title>{props.title}</Title>
      <DescriptionWrapper>
        <Text>{props.text}</Text>
        <StackWrapper>
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
              <Link href="">
                <Icon
                  iconId={'link'}
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                />
                Live Preview
              </Link>
            </FlexWrapper>
            <FlexWrapper>
              <Link href={props.linkGit}>
                <Icon
                  iconId={'linkGit'}
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                />
                View Code
              </Link>
            </FlexWrapper>
          </FlexWrapper>
        </StackWrapper>
      </DescriptionWrapper>
    </StyledDescription>
  );
};

const StyledDescription = styled.div`
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
