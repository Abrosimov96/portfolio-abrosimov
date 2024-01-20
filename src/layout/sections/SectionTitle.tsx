import { S } from './SectionTitle_styles';

type SectionTitleProps = {
  title: string;
  text: string;
};

export const SectionTitle: React.FC<SectionTitleProps> = (
  props: SectionTitleProps,
) => {
  return (
    <S.SectionTitle>
      <S.Title>{props.title}</S.Title>
      <S.Text>{props.text}</S.Text>
    </S.SectionTitle>
  );
};
