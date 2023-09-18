import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AuthPageReducer } from '../../model/slices/AuthPageSlice';
import AuthForm from './AuthForm';

describe('AuthForm.test', () => {
  test('Success auth with correct data', async () => {
    componentRender(<AuthForm />, { asyncReducers: { authForm: AuthPageReducer } });
    const loginInput = screen.getByTestId('login');
    const passwordInput = screen.getByTestId('password');
    const submitBtn = screen.getByTestId('submitBtn');
    await userEvent.type(loginInput, 'user');
    await userEvent.type(passwordInput, '123');
    await userEvent.click(submitBtn);
    expect(screen.queryByTestId('errors.Paragraph')).not.toBeInTheDocument();
  });
  test('error if no pwd', async () => {
    componentRender(<AuthForm />, { asyncReducers: { authForm: AuthPageReducer } });
    const loginInput = screen.getByTestId('login');
    const submitBtn = screen.getByTestId('submitBtn');
    await userEvent.type(loginInput, 'user');
    await userEvent.click(submitBtn);
    expect(screen.getByTestId('errors.Paragraph')).toBeInTheDocument();
  });
  test('error if no data', async () => {
    componentRender(<AuthForm />, { asyncReducers: { authForm: AuthPageReducer } });
    const submitBtn = screen.getByTestId('submitBtn');
    await userEvent.click(submitBtn);
    expect(screen.getByTestId('errors.Paragraph')).toBeInTheDocument();
  });
});
