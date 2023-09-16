import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Text, TextSize } from 'shared/ui/Text/Text';

interface TodoHeaderProps {
  className?: string;
}

export const TodoHeader = memo((props : TodoHeaderProps) => {
  const { className } = props;
  const { t } = useTranslation();
  return (
    <Text className={classNames('', {}, [className])} align="center" title={t('todos')} size={TextSize.L} />
  );
});
