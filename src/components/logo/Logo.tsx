import { Icon } from '../icon/Icon';
import { S } from './Logo_Styles';

export const Logo: React.FC = () => {
  return (
    <S.Link href="#">
      <Icon
        iconId={'logo'}
        width="28"
        height="28"
        viewBox="0 0 28 28"
      />
    </S.Link>
  );
};
