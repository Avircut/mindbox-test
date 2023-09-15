import { StateSchema } from 'app/providers/StoreProvider';

export const getLogin = (state: StateSchema) => state.authForm?.login ?? '';
export const getPassword = (state: StateSchema) => state.authForm?.password ?? '';
