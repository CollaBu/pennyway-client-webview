import { IconName } from '../consts/sprite';

interface IconProps {
  name: IconName;
  width: string;
  height: string;
  color?: string;
}

export const Icon: React.FC<IconProps> = ({ name, width, height, color }) => {
  return (
    <svg width={width} height={height} fill={color || 'none'}>
      <use xlinkHref={`assets/sprites/common.svg#${name}-icon`} />
    </svg>
  );
};
