import { Menu } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Fragment, ReactNode } from 'react';
import { DropdownDirection } from 'shared/types/ui';
import cls from './Dropdown.module.scss';
import { AppLink } from '../AppLink/AppLink';
import { HStack } from '../Stack';

export interface DropdownItem {
  disabled?: boolean;
  content?: string;
  href?: string;
  onClick?: () => void;
}
interface DropdownProps {
  className?: string;
  items: DropdownItem[];
  trigger: ReactNode;
  direction?: DropdownDirection;
}

export function Dropdown(props: DropdownProps) {
  const {
    className, items, trigger, direction = 'bottomLeft',
  } = props;

  const optionsClasses = [cls[direction]];
  return (
    <HStack>
      <Menu as="div" className={classNames(cls.Dropdown, {}, [className])}>
        <Menu.Button className={cls.btn}>{trigger}</Menu.Button>
        <Menu.Items className={classNames(cls.menu, {}, optionsClasses)}>
          {items.map((item, index) => {
            const content = ({ active, disabled }:{active:boolean, disabled:boolean}) => (
              <button
                type="button"
                onClick={item.onClick}
                className={classNames(
                  cls.item,
                  { [cls.active]: active, [cls.disabled]: disabled },
                  [],
                )}
              >
                {item.content}
              </button>
            );
            if (item.href) {
              return (
                <Menu.Item as={AppLink} to={item.href} key={index}>
                  { content }
                </Menu.Item>
              );
            }
            return (
              <Menu.Item as={Fragment} key={index}>
                { content }
              </Menu.Item>
            );
          })}
        </Menu.Items>
      </Menu>
    </HStack>

  );
}
