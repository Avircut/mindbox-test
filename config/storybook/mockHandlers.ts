import { rest } from 'msw';

export const msw = {
  handlers: {
    todo: rest.get(`${__API__}/todos`, (req, res, ctx) => {
      return res(
        ctx.json([
          {
            id: '1',
            title: 'Test Title',
            isCompleted: false,
            userId: '1',
          },
          {
            id: '2',
            title: 'Test Title2',
            isCompleted: true,
            userId: '1',
            todos: [
              {
                id: '3',
                title: 'Child task',
                isCompleted: true,
                userId: '1',
                todoId: '2',
              },
              {
                id: '4',
                title: 'Child task2',
                isCompleted: true,
                userId: '1',
                todoId: '2',
              },
            ],
          },
          {
            id: '3',
            title: 'Child task',
            isCompleted: true,
            userId: '1',
            todoId: '2',
          },
          {
            id: '4',
            title: 'Child task2',
            isCompleted: true,
            userId: '1',
            todoId: '2',
          },
          {
            id: '5',
            title: 'Task for another user',
            isCompleted: true,
            userId: '2',
          },
        ]),
      );
    }),
  },
};
