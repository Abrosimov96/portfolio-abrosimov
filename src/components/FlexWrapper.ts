import styled from 'styled-components';

type FlexWrapperPropsType = {
  direction?: 'row-reverse' | 'column' | 'column-reverse';
  justify?:
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  align?: 'center' | 'start' | 'end';
  wrap?: 'wrap' | 'wrap-reverse';
  gap?: string;
  columnGap?: string;
};

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
  display: flex;
  flex-direction: ${(props) => props.direction || 'row'};
  justify-content: ${(props) => props.justify || 'start'};
  align-items: ${(props) => props.align || 'stretch'};
  flex-wrap: ${(props) => props.wrap || 'nowrap'};
  gap: ${(props) => props.gap || ''};
  column-gap: ${(props) => props.columnGap || ''};
`;
