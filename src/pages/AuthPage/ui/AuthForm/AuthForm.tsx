import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextSize, TextTheme } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { VStack } from 'shared/ui/Stack';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector/useAppSelector';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { PageLoader } from 'widgets/PageLoader';
import { ValidateAuthError } from '../../model/types/AuthPageSchema';
import { login } from '../../model/services/login/login';
import { AuthPageActions } from '../../model/slices/AuthPageSlice';
import {
  getErrors,
  getIsLoading,
  getLogin,
  getPassword,
} from '../../model/selectors/AuthPage';
import cls from './AuthForm.module.scss';

interface AuthFormProps {
  className?: string;
  onSuccess?: () => void;
}

const AuthForm = memo((props: AuthFormProps) => {
  const { className, onSuccess } = props;
  const { t } = useTranslation();
  const username = useAppSelector(getLogin);
  const password = useAppSelector(getPassword);
  const isLoading = useAppSelector(getIsLoading);
  const errors = useAppSelector(getErrors);
  const dispatch = useAppDispatch();

  const validateErrorsTranslates = {
    [ValidateAuthError.INCORRECT_DATA]: t('errors.incorrect data'),
    [ValidateAuthError.NO_DATA]: t('errors.no data'),
    [ValidateAuthError.NO_LOGIN]: t('errors.no login'),
    [ValidateAuthError.NO_PWD]: t('errors.no password'),
    [ValidateAuthError.SERVER_ERROR]: t('errors.server error'),
  };
  const onLoginChange = useCallback(
    (value: string) => {
      dispatch(AuthPageActions.setLogin(value));
    },
    [dispatch],
  );

  const onPasswordChange = useCallback(
    (value: string) => {
      dispatch(AuthPageActions.setPassword(value));
    },
    [dispatch],
  );

  const onClick = useCallback(async () => {
    const result = await dispatch(login({ username, password }));
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess?.();
    }
  }, [dispatch, onSuccess, password, username]);
  if (isLoading) {
    return (
      <VStack className={cls.AuthForm}>
        <PageLoader />

      </VStack>
    );
  }
  return (
    <VStack role="form" gap="16" align="stretch" className={cls.AuthForm}>
      <Text title={t('Auth')} size={TextSize.L} />
      <VStack>
        {errors
        && errors.map((error:ValidateAuthError) => <Text theme={TextTheme.ERROR} text={validateErrorsTranslates[error]} />)}
      </VStack>
      <VStack gap="8">
        <Input
          placeholder={t('Login')}
          value={username}
          onChange={onLoginChange}
        />
        <Input
          type="password"
          placeholder={t('Password')}
          value={password}
          onChange={onPasswordChange}
        />
      </VStack>
      <VStack align="end" gap="8">
        <Button
          className={cls.submitBtn}
          theme={ButtonTheme.BACKGROUND_INVERTED}
          onClick={onClick}
        >
          {t('Log in')}
        </Button>
        <LangSwitcher />
      </VStack>
    </VStack>
  );
});
export default AuthForm;
