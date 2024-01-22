import { FlexWrapper } from '../../../components/FlexWrapper';
import portrait from '../../../assets/images/photo.webp';
import { Container } from '../../../components/Container.styled';
import { S } from './Main_Styles';
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';

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
            <br />
            <Typewriter
              options={{
                strings: ['I build things for web'],
                autoStart: true,
                loop: true,
              }}
            />
          </S.MainTitle>
          <Tilt>
            <S.PhotoWrapper>
              <S.Photo src={portrait} />
            </S.PhotoWrapper>
          </Tilt>
        </FlexWrapper>
      </Container>
    </S.Main>
  );
};
