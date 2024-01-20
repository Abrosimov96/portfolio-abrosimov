import { S } from './Menu_Styles';

type MenuPropsType = {
  items: string[];
};

export const Menu: React.FC<MenuPropsType> = (
  props: MenuPropsType,
) => {
  return (
    <S.Menu>
      <ul>
        {props.items.map((item, index) => (
          <li key={index}>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
    </S.Menu>
  );
};
