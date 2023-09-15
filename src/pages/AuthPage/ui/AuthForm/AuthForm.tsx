import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { VStack } from 'shared/ui/Stack';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector/useAppSelector';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { login } from '../../model/services/login/login';
import { AuthPageActions } from '../../model/slices/AuthPageSlice';
import { getLogin, getPassword } from '../../model/selectors/AuthPage';

interface AuthFormProps {
  className?: string;
  onSuccess?: () => void;
}

const AuthForm = memo((props : AuthFormProps) => {
  const { className, onSuccess } = props;
  const { t } = useTranslation();
  const username = useAppSelector(getLogin);
  const password = useAppSelector(getPassword);
  const dispatch = useAppDispatch();

  const onLoginChange = useCallback((value:string) => {
    dispatch(AuthPageActions.setLogin(value));
  }, [dispatch]);

  const onPasswordChange = useCallback((value:string) => {
    dispatch(AuthPageActions.setPassword(value));
  }, [dispatch]);

  const onClick = useCallback(async () => {
    const result = await dispatch(login({ username, password }));
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess?.();
    }
  }, [dispatch, onSuccess, password, username]);

  return (
    <VStack gap="8" align="stretch">
      <Text title={t('Auth')} size={TextSize.L} />
      <Input placeholder={t('Login')} value={username} onChange={onLoginChange} />
      <Input placeholder={t('Password')} value={password} onChange={onPasswordChange} />
      <Button theme={ButtonTheme.OUTLINE} onClick={onClick}>{t('Log in')}</Button>
    </VStack>
  );
});
export default AuthForm;
