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
        <JobInfoWrapper>
          <FlexWrapper align="center">
            <Icon
              iconId="company"
              width="16"
              height="12"
              viewBox="0 0 16 12"
            />
            <JobInfo>{props.company}</JobInfo>
          </FlexWrapper>
          <FlexWrapper align="center">
            {props.location && (
              <>
                <Icon
                  iconId="location"
                  width="16"
                  height="12"
                  viewBox="0 0 16 12"
                />
                <JobInfo>{props.location}</JobInfo>
              </>
            )}
          </FlexWrapper>
        </JobInfoWrapper>
        <FlexWrapper align="center" gap="5px">
          <Icon
            iconId="calendar"
            width="16"
            height="12"
            viewBox="0 0 16 12"
          />
          <JobInfo>
            {props.period.from} - {props.period.to}
          </JobInfo>
        </FlexWrapper>
      </FlexWrapper>
    </SyledWork>
  );
};

const SyledWork = styled.div`
  border-bottom: 2px solid #ebeaed;
  margin-bottom: 30px;
  padding-bottom: 25px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const JobTitle = styled.h5`
  font-size: 20px;
  font-weight: 400;
  line-height: 1.4; /* 140% */
  letter-spacing: 1px;
  color: ${myTheme.colors.grey.dark};
`;

const JobInfoWrapper = styled.div`
  min-width: 320px;
  display: flex;
  justify-content: space-between;
`;

const JobInfo = styled.span`
  font-size: 12px;
  font-weight: 500;
  line-height: 2.4; /* 233.333% */
  letter-spacing: 1px;
  color: ${myTheme.colors.grey.light};
`;

const JobType = styled.span`
  color: ${myTheme.colors.accent.dark};
  display: inline-block;
  width: 84px;
  height: 24px;
  font-size: 9px;
  font-weight: 600;
  line-height: 2.9;
  background-color: ${myTheme.colors.accent.light};
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
