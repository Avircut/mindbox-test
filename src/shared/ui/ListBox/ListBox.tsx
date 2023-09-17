import { Fragment, ReactNode } from 'react';
import { Listbox as HListbox } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ListBox.module.scss';
import { HStack } from '../Stack';
import { DropdownDirection } from '../../types/ui';

export interface ListboxItem {
  value: string;
  content: ReactNode;
  disabled?: boolean;
}

interface ListboxProps {
  items?: ListboxItem[];
  className?: string;
  value?: string;
  defaultValue?: string;
  onChange: (value:string) => void;
  readonly?: boolean;
  direction?: DropdownDirection;
  label?: string;
  maxHeight?: number;
}

export function Listbox(props: ListboxProps) {
  const {
    className,
    items,
    defaultValue,
    value,
    onChange,
    readonly,
    direction = 'bottomRight',
    label,
    maxHeight,
  } = props;
  const optionClasses = [cls[direction]];
  return (
    <HStack max>
      {label && <span>{label}</span>}
      <HListbox
        disabled={readonly}
        as="div"
        className={classNames(cls.ListBox, {}, [className])}
        value={value}
        onChange={onChange}
      >
        <HListbox.Button role="grid" className={cls.trigger}>
          {value || defaultValue}
        </HListbox.Button>
        <HListbox.Options
          className={classNames(
            cls.options,
            { [cls.maxHeight]: !!maxHeight },
            optionClasses,
          )}
          style={{ maxHeight }}
        >
          {items?.map((item) => (
            <HListbox.Option
              key={item.value}
              value={item.content}
              disabled={item.disabled}
              as={Fragment}
            >
              {({ active, selected }) => (
                <li
                  className={classNames(
                    cls.item,
                    {
                      [cls.active]: active,
                      [cls.selected]: selected,
                      [cls.disabled]: item.disabled,
                    },
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
