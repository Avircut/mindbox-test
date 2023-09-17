import { FC, lazy } from 'react';
import { AddTodoFormProps } from './AddTodoForm';

export const LoginFormAsync = lazy<FC<AddTodoFormProps>>(() => import('./AddTodoForm'));
