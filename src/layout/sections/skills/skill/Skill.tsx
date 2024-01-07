import { Icon } from '../../../../components/icon/Icon';

type SkillPropsType = {
  title: string;
};

export const Skill = (props: SkillPropsType) => {
  return (
    <Icon
      iconId={props.title}
      width="100"
      height="100"
      viewBox="0 0 120 110"
    />
  );
};
