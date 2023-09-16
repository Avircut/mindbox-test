import { rtkApi } from 'shared/api/rtkApi';
import { current } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { StateSchema } from 'app/providers/StoreProvider';
import { Todo } from '../types/TodoSchema';

const todosApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    GetTodo: build.query<Todo, string>({
      query: (id) => ({
        url: `/todos/${id}`,
        params: {
          _embed: 'todos',
        },
      }),
      providesTags: () => ['Todo'],
    }),
    FetchUserTodos: build.query<Todo[], string>({
      query: (userId) => ({
        url: '/todos',
        params: {
          userId,
          _embed: 'todos',
        },
      }),
      providesTags: () => ['Todo'],
    }),
    AddNewTodo: build.mutation<Todo, Todo>({
      query: (todo) => ({
        url: '/todos',
        method: 'POST',
        body: todo,
      }),
      invalidatesTags: () => ['Todo'],
    }),
    UpdateTodo: build.mutation<Todo, Todo>({
      query: (todo) => ({
        url: `/todos/${todo.id}`,
        method: 'PUT',
        body: todo,
      }),
      async onQueryStarted(patch, { dispatch, queryFulfilled, getState }) {
        const userData = getUserAuthData(getState() as StateSchema);
        if (userData) {
          const patchResult = dispatch(
            todosApi.util.updateQueryData('FetchUserTodos', userData?.id, (draft:Todo[]) => {
              const index = draft.findIndex((todo) => todo.id === patch.id);
              draft[index] = { ...patch };
            }),
          );
          try {
            await queryFulfilled;
          } catch {
            patchResult.undo();
          }
        }
      },
      invalidatesTags: () => ['Todo'],
    }),
    RemoveTodo: build.mutation<Todo, string>({
      query: (id) => ({
        url: `/todos/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: () => ['Todo'],
    }),
  }),
});
export const useFetchUserTodos = todosApi.useFetchUserTodosQuery;
export const useGetTodo = todosApi.useGetTodoQuery;
export const useAddNewTodo = todosApi.useAddNewTodoMutation;
export const useUpdateTodo = todosApi.useUpdateTodoMutation;
export const useRemoveTodo = todosApi.useRemoveTodoMutation;
