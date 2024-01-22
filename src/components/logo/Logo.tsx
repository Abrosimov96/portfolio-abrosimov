import { Icon } from '../icon/Icon';
import { S } from './Logo_Styles';
import { animateScroll as scroll } from 'react-scroll';

export const Logo: React.FC = () => {
  return (
    <S.Link
      onClick={() => {
        scroll.scrollToTop();
      }}>
      <Icon
        iconId={'logo'}
        width="28"
        height="28"
        viewBox="0 0 28 28"
      />
    </S.Link>
  );
};
