import { classNames } from 'shared/lib/classNames/classNames';
import { Typography, Button } from '@mui/material';
import cls from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}
export const PageError = ({ className }: PageErrorProps) => {
  const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };
  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      <Typography>Something went wrong</Typography>
      <Button variant="text" onClick={reloadPage}>
        Reload Page
      </Button>
    </div>
  );
};
