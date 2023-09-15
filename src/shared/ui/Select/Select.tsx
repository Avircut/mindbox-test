import { Mods, classNames } from 'shared/lib/classNames/classNames';
import {
  ChangeEvent, memo, useMemo,
} from 'react';
import cls from './Select.module.scss';

export interface SelectOption<T extends string> {
  value: T;
  content: string;
}

interface SelectProps<T extends string> {
  className?: string;
  label?: string;
  options?: SelectOption<T>[];
  value?: string;
  onChange?: (value: T) => void;
  readonly?: boolean
}

export const Select = <T extends string>(props: SelectProps<T>) => {
  const {
    className, label, options, value, onChange, readonly,
  } = props;
  const onChangeHandler = (e:ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value as T);
  };

  const optionsList = useMemo(
    () => options?.map((opt) => (
      <option value={opt.value} className={cls.option} key={opt.value}>
        {opt.content}
      </option>
    )),
    [options],
  );

  const mods: Mods = {};
  return (
    <div className={classNames(cls.Wrapper, mods, [className])}>
      {label && <span className={cls.label}>{`${label}>`}</span>}
      <select value={value} onChange={onChangeHandler} className={cls.select} disabled={readonly}>
        {optionsList}
      </select>
    </div>
  );
};
