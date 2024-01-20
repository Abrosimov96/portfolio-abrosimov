import { S } from '../Header_styles';

type MobileMenuPropsType = {
  items: string[];
};

export const MobileMenu: React.FC<MobileMenuPropsType> = (
  props: MobileMenuPropsType,
) => {
  return (
    <S.MobileMenu>
      <S.BurgerButton isOpen={false}>
        <span></span>
      </S.BurgerButton>
      <S.MobileMenuPopup isOpen={false}>
        <ul>
          {props.items.map((item, index) => (
            <li key={index}>
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
        </ul>
      </S.MobileMenuPopup>
    </S.MobileMenu>
  );
};
