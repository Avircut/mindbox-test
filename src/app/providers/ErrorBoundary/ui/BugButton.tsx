import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

// Компонент для тестирования ErrorBoundary
export const BugButton = () => {
  const [error, setError] = useState(false);
  const { t } = useTranslation();
  const toggleError = () => {
    setError((prev) => !prev);
  };
  useEffect(() => {
    if (error) throw new Error();
  }, [error]);
  return (
    <Button
      theme={ButtonTheme.CLEAR}
      onClick={toggleError}
      className=""
    >
      {t('throw Error')}
    </Button>
  );
};
