import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Page } from 'widgets/Page/Page';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage = memo(({ className } : NotFoundPageProps) => {
  return (
    <Page className={classNames(cls.NotFoundPage)}>
      404 - Страница не найдена
    </Page>
  );
});
