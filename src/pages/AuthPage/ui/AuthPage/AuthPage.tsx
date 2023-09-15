import { memo, useCallback } from 'react';
import { Page } from 'widgets/Page/Page';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { userActions } from 'entities/User';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../AuthForm/AuthForm';

interface AuthPageProps {
    className?: string;
}

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
    <Page>
      <AuthForm onSuccess={onOpenMainPage} />
    </Page>
  );
});
export default AuthPage;
