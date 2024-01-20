import { Icon } from '../icon/Icon';
import { S } from './Social_Styles';

type SocialPropsType = {
  items: string[];
};

export const Social: React.FC<SocialPropsType> = (
  props: SocialPropsType,
) => {
  return (
    <S.Social>
      {props.items.map((item, index) => (
        <li key={index}>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#">
            <Icon iconId={item} />
          </a>
        </li>
      ))}
    </S.Social>
  );
};
