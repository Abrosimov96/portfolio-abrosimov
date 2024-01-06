import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import portrait from '../../../assets/images/photo.webp';
import { myTheme } from '../../../styles/Theme.styled';

export const Main = () => {
  return (
    <StyledMain>
      <FlexWrapper justify="space-between" align="center">
        <MainTitle>
          Hi 👋,
          <br /> My name is
          <br /> <StyledName>Anton Abrosimov</StyledName>
          <br /> I build things for web
        </MainTitle>
        <PhotoWrapper>
          <Photo src={portrait} />
        </PhotoWrapper>
      </FlexWrapper>
    </StyledMain>
  );
};

const StyledMain = styled.main`
  min-height: 90vh;
  background-color: #b6ffad;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const MainTitle = styled.h2`
  color: ${myTheme.colors.secondary};
`;

const StyledName = styled.span`
  background-image: linear-gradient(${myTheme.colors.gradient});
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Photo = styled.img`
  height: 350px;
  width: 350px;
  object-fit: cover;
  border-radius: 100%;
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
`;

const PhotoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 9px;
  border-radius: 100%;
  background-image: linear-gradient(${myTheme.colors.gradient});
`;
