import { rtkApi } from 'shared/api/rtkApi';
import { getUserAuthData } from 'entities/User';
import { StateSchema } from 'app/providers/StoreProvider';
import { recursiveSearch } from 'shared/lib/recursiveSearch/recursiveSearch';
import { Todo } from '../types/TodoSchema';

const findTodoById = (arr: Todo[], patch:Todo) => {
  const index = arr.findIndex((item) => item.id === patch.id);
  if (index !== -1) arr[index] = { ...patch };
};
const deleteTodoById = (arr: Todo[], patch:string) => {
  const index = arr.findIndex((item) => item.id === patch);
  if (index !== -1) arr.splice(index, 1);
};

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
            todosApi.util.updateQueryData('FetchUserTodos', userData?.id, (draft) => {
              recursiveSearch(draft, findTodoById, 'todos', patch);
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
      async onQueryStarted(patch, { dispatch, queryFulfilled, getState }) {
        const userData = getUserAuthData(getState() as StateSchema);
        if (userData) {
          const patchResult = dispatch(
            todosApi.util.updateQueryData('FetchUserTodos', userData?.id, (draft) => {
              recursiveSearch(draft, deleteTodoById, 'todos', patch);
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
  }),
});
export const useFetchUserTodos = todosApi.useFetchUserTodosQuery;
export const useGetTodo = todosApi.useGetTodoQuery;
export const useAddNewTodo = todosApi.useAddNewTodoMutation;
export const useUpdateTodo = todosApi.useUpdateTodoMutation;
export const useRemoveTodo = todosApi.useRemoveTodoMutation;
