import { FlexWrapper } from '../../../../../components/FlexWrapper';
import { Icon } from '../../../../../components/icon/Icon';
import { S } from '../../Project_Styles';

type ProjectDescriptionPropsType = {
  title: string;
  text: string;
  techStack: string[];
  linkGit: string;
};

export const ProjectDescription: React.FC<
  ProjectDescriptionPropsType
> = (props: ProjectDescriptionPropsType) => {
  return (
    <S.Description>
      <S.Title>{props.title}</S.Title>
      <S.DescriptionWrapper>
        <S.Text>{props.text}</S.Text>
        <S.StackWrapper>
          <S.TechStack>
            TechStack:{' '}
            {props.techStack.map((stack, index, arr) => (
              <S.Stack key={stack}>
                {stack}
                {arr.length - 1 !== index && ', '}
              </S.Stack>
            ))}
          </S.TechStack>
          <FlexWrapper justify="space-between">
            <FlexWrapper>
              <S.Link href="">
                <Icon
                  iconId={'link'}
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                />
                Live Preview
              </S.Link>
            </FlexWrapper>
            <FlexWrapper>
              <S.Link href={props.linkGit}>
                <Icon
                  iconId={'linkGit'}
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                />
                View Code
              </S.Link>
            </FlexWrapper>
          </FlexWrapper>
        </S.StackWrapper>
      </S.DescriptionWrapper>
    </S.Description>
  );
};
