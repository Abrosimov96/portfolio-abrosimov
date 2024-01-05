import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import portrait from '../../../assets/images/photo.webp';

export const Main = () => {
  return (
    <StyledMain>
      <FlexWrapper justify="space-between" align="center">
        <MainTitle>
          Hi 👋, My name is Anton Abrosimov I build things for web
        </MainTitle>
        <Photo src={portrait} />
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

const MainTitle = styled.h2``;

const Photo = styled.img`
  height: 350px;
  width: 350px;
  object-fit: cover;
  border-radius: 100%;
`;
