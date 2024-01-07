import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../../../components/FlexWrapper';
import { Icon } from '../../../../../components/icon/Icon';
import { myTheme } from '../../../../../styles/Theme.styled';

type WorkPropsType = {
  jobTitle: string;
  company: string;
  location?: string;
  type: string;
  period: {
    from: string;
    to: string;
  };
};

export const Work = (props: WorkPropsType) => {
  return (
    <SyledWork>
      <FlexWrapper justify="space-between" align="center">
        <JobTitle>{props.jobTitle}</JobTitle>
        <JobType>{props.type}</JobType>
      </FlexWrapper>
      <FlexWrapper justify="space-between" align="end">
        <FlexWrapper justify="space-between" align="center">
          <Icon
            iconId="company"
            width="16"
            height="12"
            viewBox="0 0 16 12"
          />
          <CompanyName>{props.company}</CompanyName>
          {props.location && (
            <>
              <Icon
                iconId="location"
                width="16"
                height="12"
                viewBox="0 0 16 12"
              />
              <CompanyName>{props.location}</CompanyName>
            </>
          )}
        </FlexWrapper>
        <FlexWrapper direction="column" align="end">
          <FlexWrapper align="center">
            <Icon
              iconId="calendar"
              width="16"
              height="12"
              viewBox="0 0 16 12"
            />
            <JobPeriod>
              {props.period.from} - {props.period.to}
            </JobPeriod>
          </FlexWrapper>
        </FlexWrapper>
      </FlexWrapper>
    </SyledWork>
  );
};

const SyledWork = styled.div`
  border: 1px solid blue;
  align-items: center;
  justify-content: space-between;
`;

const JobTitle = styled.h5`
  color: ${myTheme.colors.grey.dark};
`;

const CompanyName = styled.span`
  color: ${myTheme.colors.grey.light};
`;

const JobType = styled.span`
  color: ${myTheme.colors.accent.dark};
`;

const JobPeriod = styled.span`
  color: ${myTheme.colors.grey.light};
`;
