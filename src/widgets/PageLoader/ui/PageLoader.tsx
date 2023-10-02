import { classNames } from 'shared/lib/classNames/classNames';
import { CircularProgress, Backdrop } from '@mui/material';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader = ({ className } : PageLoaderProps) => {
  return (
    <div data-testid="pageLoader" className={classNames(cls.PageLoader, {}, [className])}>
      <Backdrop open>
        <CircularProgress />
      </Backdrop>
    </div>
  );
};
