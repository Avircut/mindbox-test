export enum ValidateAuthError {
  NO_LOGIN = 'NO_LOGIN',
  NO_PWD = 'NO_PWD',
  NO_DATA = 'NO_DATA',
  SERVER_ERROR = 'SERVER_ERROR',
  INCORRECT_DATA = 'INCORRECT_DATA'
}

export interface AuthPageSchema {
  login?: string;
  password?: string;
  isLoading?: boolean;
  errors?: ValidateAuthError[];
}
