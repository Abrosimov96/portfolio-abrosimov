import { S } from '../Header_styles';
import { Menu } from '../menu/Menu';

type MenuPropsType = {
  items: string[];
};

export const DesktopMenu: React.FC<MenuPropsType> = (
  props: MenuPropsType,
) => {
  return (
    <S.Menu>
      <Menu items={props.items} />
    </S.Menu>
  );
};
