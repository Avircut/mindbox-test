import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Icon.module.scss';

export type IconColor = 'red' | 'green' | 'primary' | 'secondary';

interface IconProps {
  className?: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
  strokeColor?: IconColor;
  fillColor?: IconColor;
}
export const Icon = memo((props : IconProps) => {
  const {
    className, Svg, strokeColor, fillColor,
  } = props;
  const stroke = strokeColor ? `stroke_${strokeColor}` : '';
  const fill = fillColor ? `fill_${fillColor}` : '';
  return (
    <Svg className={classNames(cls.Icon, {}, [cls[stroke], cls[fill], className])} />
  );
});
