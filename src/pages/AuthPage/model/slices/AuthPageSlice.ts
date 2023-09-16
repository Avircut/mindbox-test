import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthPageSchema } from '../types/AuthPageSchema';
import { login } from '../services/login/login';

const initialState: AuthPageSchema = {
  login: '',
  password: '',
};

export const AuthPageSlice = createSlice({
  name: 'AuthPage',
  initialState,
  reducers: {
    setLogin: (state, action: PayloadAction<string>) => {
      state.login = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
  extraReducers: (builder) => builder.addCase(login.pending, (state) => {
    state.errors = undefined;
    state.isLoading = true;
  })
    .addCase(login.fulfilled, (state) => {
      state.isLoading = false;
    })
    .addCase(login.rejected, (state, action) => {
      state.errors = action.payload;
      state.isLoading = false;
    }),
});

export const { actions: AuthPageActions } = AuthPageSlice;
export const { reducer: AuthPageReducer } = AuthPageSlice;
