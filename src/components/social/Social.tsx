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
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#">
            <Icon iconId={item} />
          </a>
        </li>
      ))}
    </StyledSocial>
  );
};

const StyledSocial = styled.ul`
  display: flex;
  gap: 20px;
`;
