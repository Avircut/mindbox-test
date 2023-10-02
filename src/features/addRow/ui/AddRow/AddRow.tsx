import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';

interface AddRowProps {
    className?: string;
}

export const AddRow = memo((props: AddRowProps) => {
  const { className } = props;

  return (
    <div className={classNames('', {}, [className])} />
  );
});
