import styled from 'styled-components';
import { Icon } from '../icon/Icon';
import { animateScroll as scroll } from 'react-scroll';
import { useEffect, useState } from 'react';

export const GoTopBtn = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 200 ? setIsVisible(true) : setIsVisible(false);
    });
    return window.removeEventListener('scroll', () => {
      window.scrollY > 200 ? setIsVisible(true) : setIsVisible(false);
    });
  }, []);

  return (
    <>
      {isVisible && (
        <StyledGoTopBtn
          onClick={() => {
            scroll.scrollToTop();
          }}>
          <Icon
            iconId="goTop"
            height="15"
            width="16"
            viewBox="0 0 16 15"
          />
        </StyledGoTopBtn>
      )}
    </>
  );
};

const StyledGoTopBtn = styled.button`
  cursor: pointer;
  padding: 8px;
  background-color: #00000030;
  color: #fff;

  position: fixed;
  bottom: 30px;
  right: 30px;

  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #000000;
  }
`;
