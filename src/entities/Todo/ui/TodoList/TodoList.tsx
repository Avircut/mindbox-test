import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { VStack } from 'shared/ui/Stack';
import cls from './TodoList.module.scss';
import { Todo } from '../../model/types/TodoSchema';
import { TodoItem } from '../TodoItem/TodoItem';

interface TodoListProps {
  className?: string;
  todos?: Todo[];
}

export const TodoList = memo((props : TodoListProps) => {
  const { className, todos } = props;
  return (
    <VStack gap="0" className={classNames(cls.TodoList, {}, [className])}>
      {todos?.map((todo) => todo.id && <TodoItem key={todo.id} todo={todo} />)}
    </VStack>
  );
});
