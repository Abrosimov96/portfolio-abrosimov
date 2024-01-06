import styled from 'styled-components';
import { Button } from '../../../components/Button';
import { SectionTitle } from '../SectionTitle';

export const Contact = () => {
  return (
    <StyledContact>
      <SectionTitle
        title="Contact"
        text="I Am Available For Freelance"
      />
      <StyledForm>
        <Field placeholder={'Name'} />
        <Field placeholder={'Subject'} />
        <Field placeholder={'Message...'} as={'textarea'} />
        <Button type={'submit'}>Send Message</Button>
      </StyledForm>
    </StyledContact>
  );
};

const StyledContact = styled.section`
  min-height: 100vh;
  background-color: #c0c0c0;
`;

const StyledForm = styled.form`
  margin: 0 auto;
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Field = styled.input``;
