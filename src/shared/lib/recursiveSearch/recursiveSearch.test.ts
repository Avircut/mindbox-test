import { Todo } from 'entities/Todo';
import { recursiveSearch } from './recursiveSearch';

const testObject = [
  {
    id: '1',
    title: 'test',
  },
  {
    id: '2',
    title: 'test',
    todos: [
      {
        id: '4',
        title: 'test',
        todoId: '2',
      },
      {
        id: '5',
        title: 'test',
        todoId: '2',
        todos: [
          {
            id: '4',
            title: 'test',
            todoId: '2',
          },
          {
            id: '3',
            title: 'test',
          },
        ],
      },
    ],
  },
  {
    id: 'Sds32-sW',
    title: 'test',
  },
  {
    id: '4',
    title: 'test',
  },
  {
    id: '5',
    title: 'test',
  },
];
describe('recursiveSearch.test', () => {
  test('find Todos where id = 4', () => {
    let amount = 0;
    const findTodoById = (arr:Todo[], patch:{id:string}) => {
      const index = arr.findIndex((item) => item.id === patch.id);
      if (index !== -1) amount += 1;
    };
    recursiveSearch(testObject, findTodoById, 'todos', { id: '4' });
    expect(amount).toEqual(3);
  });
  test('find Todos where id = Sds32-sW', () => {
    let amount = 0;
    const findTodoById = (arr:Todo[], patch:{id:string}) => {
      const index = arr.findIndex((item) => item.id === patch.id);
      if (index !== -1) amount += 1;
    };
    recursiveSearch(testObject, findTodoById, 'todos', { id: 'Sds32-sW' });
    expect(amount).toEqual(1);
  });
  test('Find zero if there are no such id', () => {
    let amount = 0;
    const findTodoById = (arr:Todo[], patch:{id:string}) => {
      const index = arr.findIndex((item) => item.id === patch.id);
      if (index !== -1) amount += 1;
    };
    recursiveSearch(testObject, findTodoById, 'todos', { id: 'Sds32-sWss' });
    expect(amount).toEqual(0);
  });
});
