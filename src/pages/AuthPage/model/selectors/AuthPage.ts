import { StateSchema } from 'app/providers/StoreProvider';

export const getLogin = (state: StateSchema) => state.authForm?.login ?? '';
export const getPassword = (state: StateSchema) => state.authForm?.password ?? '';
export const getIsLoading = (state: StateSchema) => state.authForm?.isLoading ?? false;
export const getErrors = (state: StateSchema) => state.authForm?.errors;
