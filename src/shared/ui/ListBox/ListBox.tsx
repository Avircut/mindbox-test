import { Fragment, ReactNode } from 'react';
import { Listbox as HListbox } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ListBox.module.scss';
import { Button } from '../Button/Button';
import { HStack } from '../Stack';
import { DropdownDirection } from '../../types/ui';

export interface ListboxItem{
  value: string;
  content: ReactNode;
  disabled?: boolean;
}

interface ListboxProps{
  items?: ListboxItem[];
  className?: string;
  value?: string;
  defaultValue?: string;
  onChange: (value:string) => void;
  readonly?: boolean;
  direction?: DropdownDirection;
  label?:string;
}

export function Listbox(props: ListboxProps) {
  const {
    className, items, defaultValue, value, onChange, readonly, direction = 'bottomRight', label,
  } = props;
  const optionClasses = [cls[direction]];
  return (
    <HStack>
      {label && <span>{`${label}>`}</span>}
      <HListbox
        disabled={readonly}
        as="div"
        className={classNames(cls.ListBox, {}, [className])}
        value={value}
        onChange={onChange}
      >

        <HListbox.Button className={cls.trigger}>
          <Button disabled={readonly}>{value ?? defaultValue}</Button>
        </HListbox.Button>
        <HListbox.Options className={classNames(cls.options, {}, optionClasses)}>
          {items?.map((item) => (
            <HListbox.Option
              key={item.value}
              value={item.value}
              disabled={item.disabled}
              as={Fragment}
            >
              {({ active, selected }) => (
                <li
                  className={classNames(
                    cls.item,
                    { [cls.active]: active, [cls.selected]: selected, [cls.disabled]: item.disabled },
                    [],
                  )}
                >
                  {item.content}
                </li>
              )}
            </HListbox.Option>
          ))}
        </HListbox.Options>
      </HListbox>
    </HStack>

  );
}
