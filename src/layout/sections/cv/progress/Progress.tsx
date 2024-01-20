import React from 'react';
import { FlexWrapper } from '../../../../components/FlexWrapper';
import { Icon } from '../../../../components/icon/Icon';
import { S } from '../CV_Styles';

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

export const Progress: React.FC<WorkPropsType> = (
  props: WorkPropsType,
) => {
  return (
    <S.Progress>
      <FlexWrapper justify="space-between" align="center">
        <S.ProgressTitle>{props.jobTitle}</S.ProgressTitle>
        <S.ProgressType>{props.type}</S.ProgressType>
      </FlexWrapper>
      <FlexWrapper wrap="wrap" justify="space-between" align="end">
        <S.ProgressInfoWrapper>
          <FlexWrapper align="center">
            <Icon
              iconId="company"
              width="16"
              height="12"
              viewBox="0 0 16 12"
            />
            <S.ProgressInfo>{props.company}</S.ProgressInfo>
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
                <S.ProgressInfo>{props.location}</S.ProgressInfo>
              </>
            )}
          </FlexWrapper>
        </S.ProgressInfoWrapper>
        <FlexWrapper align="center" gap="5px">
          <Icon
            iconId="calendar"
            width="16"
            height="12"
            viewBox="0 0 16 12"
          />
          <S.ProgressInfo>
            {props.period.from} - {props.period.to}
          </S.ProgressInfo>
        </FlexWrapper>
      </FlexWrapper>
    </S.Progress>
  );
};
