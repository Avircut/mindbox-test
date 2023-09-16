import AuthPage from 'pages/AuthPage/ui/AuthPage/AuthPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { RouteProps } from 'react-router-dom';

export type AppRoutesProps = RouteProps & {
  restriction?: 'auth' | 'anon';
}

export enum AppRoutes {
  TODOS = 'todos',
  TODO_DETAIL = 'todo_detail',
  AUTH = 'auth',
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.TODOS]: '/',
  [AppRoutes.TODO_DETAIL]: '/todos/', // + id
  [AppRoutes.AUTH]: '/auth',
  [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.TODOS]: {
    path: RoutePath.todos,
    element: <MainPage />,
    restriction: 'auth',
  },
  [AppRoutes.TODO_DETAIL]: {
    path: `${RoutePath.todo_detail}:id`,
  },
  [AppRoutes.AUTH]: {
    path: RoutePath.auth,
    element: <AuthPage />,
    restriction: 'anon',
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
