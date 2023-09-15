import { AuthPageSchema, ValidateAuthError } from '../../types/AuthPageSchema';

export const validateAuth = (authForm?: AuthPageSchema) => {
  if (!authForm) return [ValidateAuthError.NO_DATA];
  const {
    login, password,
  } = authForm;

  const errors: ValidateAuthError[] = [];

  if (!login) {
    errors.push(ValidateAuthError.NO_LOGIN);
  }

  if (!password) {
    errors.push(ValidateAuthError.NO_PWD);
  }
  return errors;
};
