import { Link } from 'react-scroll';
import styled from 'styled-components';
import { myTheme } from '../../../styles/Theme.styled';

type MenuPropsType = {
  items: string[];
};

export const Menu: React.FC<MenuPropsType> = (
  props: MenuPropsType,
) => {
  return (
    <ul>
      {props.items.map((item, index) => (
        <li key={index}>
          <NavLink
            to={`${item}`}
            smooth={true}
            offset={-100}
            activeClass="active"
            spy={true}>
            {item}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

const NavLink = styled(Link)`
  color: ${myTheme.colors.grey.dark};
  transition: color 0.3s ease-in-out;
  &:hover,
  &.active {
    color: ${myTheme.colors.primary};
  }
`;
