import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Suspense, useEffect } from 'react';
import { getUserInited, userActions } from 'entities/User';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector/useAppSelector';

const App = () => {
  const { theme } = useTheme();
  const dispatch = useAppDispatch();
  const inited = useAppSelector(getUserInited);
  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);
  document.body.className = theme;
  return (
    <Suspense fallback="">
      <div className={classNames('app')}>
        {/* <Navbar /> */}
        <div className="content-page">
          {inited && <AppRouter />}
        </div>
      </div>
    </Suspense>

  );
};
export default App;
