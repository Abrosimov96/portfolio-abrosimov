import styled from 'styled-components';

type MenuPropsType = {
  items: string[];
};

export const Menu = (props: MenuPropsType) => {
  return (
    <StyledMenu>
      <ul>
        {props.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 20px;
    justify-content: center;
  }
`;
