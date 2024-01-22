import { CVTitle } from '../CVTitle';
import { S } from '../CV_Styles';

type AboutPropsType = {
  title: string;
  description: string;
};

export const About: React.FC<AboutPropsType> = (
  props: AboutPropsType,
) => {
  return (
    <S.About>
      <CVTitle>{props.title}</CVTitle>
      <S.AboutDescription>{props.description}</S.AboutDescription>
    </S.About>
  );
};
