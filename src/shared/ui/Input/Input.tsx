import { Mods, classNames } from 'shared/lib/classNames/classNames';
import {
  InputHTMLAttributes, memo,
} from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'readOnly'
>;
export type InputTheme = 'default' | 'clear';

export interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  readonly?: boolean;
  theme?: InputTheme;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    readonly = false,
    theme = 'default',
    ...otherProps
  } = props;

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };
  const mods: Mods = {
    [cls.readonly]: readonly,
  };
  return (
    <input
      placeholder={placeholder}
      type={type}
      onChange={onChangeHandler}
      className={classNames(cls.input, mods, [cls[theme], className])}
      value={value}
      readOnly={readonly}
      {...otherProps}
    />
  );
});
