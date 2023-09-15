import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';

interface TodoProps {
    className?: string;
}

export const TodoItem = memo((props: TodoProps) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames('', {}, [className])} />
  );
});
