import { Button } from '../../../components/Button';
import { Container } from '../../../components/Container.styled';
import { SectionTitle } from '../SectionTitle';
import { S } from './Contact_Styles';

export const Contact: React.FC = () => {
  return (
    <S.Contact id="Contact">
      <Container>
        <SectionTitle
          title="Contact"
          text="I Am Available For Freelance"
        />
        <S.Form>
          <S.Field type={'text'} placeholder={'Name'} />
          <S.Field type={'text'} placeholder={'Subject'} />
          <S.Field
            className="areaField"
            placeholder={'Message...'}
            as={'textarea'}
          />
          <Button type={'submit'}>Send Message</Button>
        </S.Form>
      </Container>
    </S.Contact>
  );
};
