import styled from 'styled-components';
import { Icon } from '../icon/Icon';

type SocialPropsType = {
  items: string[];
};

export const Social = (props: SocialPropsType) => {
  return (
    <StyledSocial>
      {props.items.map((item, index) => (
        <li key={index}>
          <Icon iconId={`${item}`} />
        </li>
      ))}
    </StyledSocial>
  );
};

const StyledSocial = styled.ul`
  display: flex;
  gap: 20px;
`;
