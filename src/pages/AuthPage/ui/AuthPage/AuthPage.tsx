import { memo, useCallback } from 'react';
import { Page } from 'widgets/Page/Page';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { userActions } from 'entities/User';
import { useNavigate } from 'react-router-dom';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { AuthPageReducer } from '../../model/slices/AuthPageSlice';
import AuthForm from '../AuthForm/AuthForm';
import cls from './AuthPage.module.scss';

interface AuthPageProps {
    className?: string;
}
const reducers: ReducersList = {
  authForm: AuthPageReducer,
};
const AuthPage = memo((props: AuthPageProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onOpenMainPage = useCallback(() => {
    navigate('/');
  }, [navigate]);
  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);
  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page className={cls.Page}>
        <AuthForm onSuccess={onOpenMainPage} />
      </Page>
    </DynamicModuleLoader>

  );
});
export default AuthPage;
