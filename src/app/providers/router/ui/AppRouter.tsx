import { Suspense, memo, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  AppRoutesProps,
  routeConfig,
} from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';
import { RequireAuth } from './RequireAuth';
import { RequireAnon } from './RequireAnon';

const AppRouter = () => {
  const renderWithWrapper = useCallback((route: AppRoutesProps) => {
    let element = (
      <Suspense fallback={<PageLoader />}>
        {route.element}
      </Suspense>
    );
    switch (route.restriction) {
      case 'auth': element = (
        <RequireAuth>
          {element}
        </RequireAuth>
      );
        break;
      case 'anon': element = (
        <RequireAnon>
          {element}
        </RequireAnon>
      );
        break;
      default: break;
    }
    return (
      <Route
        key={route.path}
        path={route.path}
        element={element}
      />
    );
  }, []);

  return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
};

export default memo(AppRouter);
