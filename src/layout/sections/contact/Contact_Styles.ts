import styled from 'styled-components';
import { Button } from '../../../components/Button';
import { myTheme } from '../../../styles/Theme.styled';

const Contact = styled.section`
  ${myTheme.sectionMarginBottom}
`;

const Form = styled.form`
  margin: 0 auto;
  max-width: 700px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  .areaField {
    resize: none;
    height: 155px;
  }

  ${Button} {
    margin: 30px auto;
  }
`;

const Field = styled.input`
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid ${myTheme.colors.grey.dark};
  outline: 0;
  font-size: 1rem;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;

  &::placeholder {
    font-family: inherit;
  }

  &:focus {
    transition: 0.2s;
    font-size: 1.3rem;
    color: ${myTheme.colors.secondary};
    font-weight: 700;
  }
`;

export const S = {
  Field,
  Form,
  Contact,
};
