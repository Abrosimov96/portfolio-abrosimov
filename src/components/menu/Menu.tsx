import styled from 'styled-components';
import { myTheme } from '../../styles/Theme.styled';

type MenuPropsType = {
  items: string[];
};

export const Menu = (props: MenuPropsType) => {
  return (
    <StyledMenu>
      <ul>
        {props.items.map((item, index) => (
          <li key={index}>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 50px;
    justify-content: center;
    flex-wrap: wrap;
    li {
      color: ${myTheme.colors.grey.dark};
    }
  }
`;
