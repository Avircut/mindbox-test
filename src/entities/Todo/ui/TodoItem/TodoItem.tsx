import { Mods, classNames } from 'shared/lib/classNames/classNames';
import {
  memo, useCallback, useEffect, useState,
} from 'react';
import { HStack, VStack } from 'shared/ui/Stack';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import doneCheckIcon from 'shared/assets/icons/done-20-20.svg';
import { Text } from 'shared/ui/Text/Text';
import editIcon from 'shared/assets/icons/edit.svg';
import deleteIcon from 'shared/assets/icons/delete.svg';
import { Input } from 'shared/ui/Input/Input';
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce';
import { useGetTodo, useRemoveTodo, useUpdateTodo } from '../../model/services/TodoService';
import cls from './TodoItem.module.scss';
import { Todo } from '../../model/types/TodoSchema';
import { TodoList } from '../TodoList/TodoList';

interface TodoProps {
  className?: string;
  todo: Todo;
}

export const TodoItem = memo((props: TodoProps) => {
  const { className, todo } = props;
  const [title, setTitle] = useState(todo.title);
  // To make it more smooth Redux docs tells to make this to make optimistic update works... I don't like that approach, but that says official docs =(
  // const { data: todo, isLoading } = useGetTodo(id);
  const mods: Mods = {
    [cls.completed]: todo.isCompleted,
  };
  const [updateTodo] = useUpdateTodo();
  const [removeTodo] = useRemoveTodo();
  const updateTitle = () => updateTodo({ ...todo, title });
  const debouncedUpdate = useDebounce(updateTitle, 500);
  useEffect(() => {
    if (title !== todo.title) {
      debouncedUpdate();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, todo.title]);
  const onDeleteClick = useCallback(() => {
    if (todo?.id) {
      removeTodo(todo.id);
    }
  }, [removeTodo, todo]);
  const onActiveChange = useCallback(() => {
    if (todo) {
      updateTodo({
        ...todo,
        isCompleted: !todo.isCompleted,
      });
    }
  }, [todo, updateTodo]);

  const onChangeTitle = (value:string) => {
    setTitle(value);
  };
  if (!todo) return null;
  return (
    <VStack
      align="stretch"
      gap="0"
      max
      className={classNames(cls.TodoItem, mods, [className])}
    >
      <HStack gap="32" max justify="between" className={cls.itemHeader}>
        <HStack gap="8" grow>
          <Button
            role="checkbox"
            className={cls.checkbox}
            theme={ButtonTheme.CLEAR}
            onClick={onActiveChange}
          >
            {todo.isCompleted && <Icon Svg={doneCheckIcon} />}
          </Button>
          <Input theme="clear" value={title} onChange={onChangeTitle} />
        </HStack>
        <HStack className={cls.icons} align="center">
          <Button onClick={onDeleteClick} theme={ButtonTheme.CLEAR} className={cls.icon}>
            <Icon Svg={deleteIcon} strokeColor="red" />
          </Button>
        </HStack>
      </HStack>
      {todo.todos && (
        <VStack gap="0" className={cls.childrenWrapper}>
          <TodoList todos={todo.todos} />
        </VStack>
      )}
    </VStack>
  );
});
