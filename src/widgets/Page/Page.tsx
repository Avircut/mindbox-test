import { classNames } from 'shared/lib/classNames/classNames';
import {
  ReactNode, memo,
} from 'react';

import cls from './Page.module.scss';

interface PageProps {
  className?: string;
  children: ReactNode;
}

export const Page = memo((props: PageProps) => {
  const { className, children } = props;

  return (
    <main
      className={classNames(cls.Page, {}, [className])}
    >
      {children}
    </main>
  );
});
