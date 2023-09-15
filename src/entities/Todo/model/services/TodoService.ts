import { rtkApi } from 'shared/api/rtkApi';
import { Todo } from '../types/TodoSchema';

const todosApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    FetchUserTodos: build.query<Todo[], string>({
      query: (userId) => ({
        url: '/todos',
        params: {
          userId,
        },
      }),
    }),
  }),
});
export const useFetchBooksList = todosApi.useFetchUserTodosQuery;
