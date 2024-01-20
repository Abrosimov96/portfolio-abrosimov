import { FlexWrapper } from '../../../components/FlexWrapper';
import portrait from '../../../assets/images/photo.webp';
import { Container } from '../../../components/Container.styled';
import { S } from './Main_Styles';

export const Main: React.FC = () => {
  return (
    <S.Main id="Home">
      <Container>
        <FlexWrapper
          wrap="wrap"
          justify="space-around"
          align="center"
          gap="50px">
          <S.MainTitle>
            Hi 👋,
            <br /> My name is
            <br /> <S.Name>Anton Abrosimov</S.Name>
            <br /> I build things for web
          </S.MainTitle>
          <S.PhotoWrapper>
            <S.Photo src={portrait} />
          </S.PhotoWrapper>
        </FlexWrapper>
      </Container>
    </S.Main>
  );
};
