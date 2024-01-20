import styled from 'styled-components';
import { myTheme } from '../../../styles/Theme.styled';
import { font } from './../../../styles/Common';

const Main = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
`;

const MainTitle = styled.h1`
  ${font({
    family: "'Poppins', sans-serif",
    weight: 700,
    Fmax: 58,
    Fmin: 36,
  })}
  letter-spacing: -1px;
  color: ${myTheme.colors.secondary};
`;

const Name = styled.span`
  background-image: linear-gradient(${myTheme.colors.gradient});
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const PhotoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 9px;
  border-radius: 100%;
  background-image: linear-gradient(${myTheme.colors.gradient});
  position: relative;
  /* 
&::before {
  content: '';
  position: absolute;
  width: 444px;
  height: 444px;
  border-image: linear-gradient(#666, #66666600) 30;
  border-width: 1px;
  border-style: solid;
  transform: rotate(105deg);
}
&::after {
  content: '';
  position: absolute;
  width: 444px;
  height: 444px;
  border-image: linear-gradient(#666, #66666600) 30;
  border-width: 1px;
  border-style: solid;
  transform: rotate(145deg);
} */
`;

const Photo = styled.img`
  height: 350px;
  width: 350px;
  object-fit: cover;
  border-radius: 50%;
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
`;

export const S = {
  Photo,
  PhotoWrapper,
  Name,
  MainTitle,
  Main,
};
