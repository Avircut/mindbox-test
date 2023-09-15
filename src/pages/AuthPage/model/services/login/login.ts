import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { validateAuth } from '../validate/validateAuth';
import { ValidateAuthError } from '../../types/AuthPageSchema';

interface LoginProps {
  username: string;
  password: string;
}

export const login = createAsyncThunk<
  User,
  LoginProps,
  ThunkConfig<ValidateAuthError[]>
>(
  'authForm/login',
  async ({ username, password }, thunkApi) => {
    const { dispatch, extra, rejectWithValue } = thunkApi;
    const errors = validateAuth({ login: username, password });
    if (errors.length) {
      return rejectWithValue(errors);
    }
    try {
      const response = await extra.api.post<User>('/login', {
        username,
        password,
      });
      if (!response.data) throw new Error();
      localStorage.setItem(
        USER_LOCALSTORAGE_KEY,
        JSON.stringify(response.data),
      );
      dispatch(userActions.setAuthData(response.data));
      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue([ValidateAuthError.SERVER_ERROR]);
    }
  },
);
