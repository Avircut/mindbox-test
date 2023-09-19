import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { memo, useCallback, useState } from 'react';
import { VStack } from 'shared/ui/Stack';
import { Input } from 'shared/ui/Input/Input';
import { Button } from 'shared/ui/Button/Button';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { Todo, useAddNewTodo, useFetchUserTodos } from 'entities/Todo';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector/useAppSelector';
import { getUserAuthData } from 'entities/User';
import { Listbox, ListboxItem } from 'shared/ui/ListBox/ListBox';
import { Loader } from 'shared/ui/Loader/Loader';
import cls from './AddTodoForm.module.scss';

export interface AddTodoFormProps {
  className?: string;
  onSuccess?: () => void;
}

export const AddTodoForm = memo((props: AddTodoFormProps) => {
  const { className, onSuccess } = props;
  const { t } = useTranslation();
  const [title, setTitle] = useState('');
  const [parent, setParent] = useState('');
  const user = useAppSelector(getUserAuthData);
  const [onAddTodo, { isLoading, error }] = useAddNewTodo();
  const { data: todos } = useFetchUserTodos(user!.id);
  const [validateError, setValidateError] = useState('');

  const listboxItems: ListboxItem[] = todos?.length
    ? todos
      .filter((todo) => !todo.todoId)
      .map((todo) => ({
        content: `${todo.title} [${todo.id}]`,
        value: todo.id ?? '',
      }))
    : [{ content: t('No todos yet'), value: '-1', disabled: true }];
  const onClick = useCallback(() => {
    if (title !== '') {
      setValidateError('');
      // Seems like JSON-server can't handle inner relationships, therefore We can't get child on third level, so [parent-child] only works. [parent-child-child] doesn't =(
      // That's a bit sad because recursive search already built to handle any level relationship...
      let parentId = '';
      if (parent) {
        const id = /\[.+\]$/.exec(parent)![0].replace(/[[\]]+/g, '');
        parentId = todos?.find((item) => item.id === id)?.id || '';
      }

      const todo: Todo = {
        userId: user!.id,
        isCompleted: false,
        title,
        todoId: parentId,
      };
      onAddTodo?.(todo);
      setTitle('');
      setParent('');
      onSuccess?.();
    } else {
      setValidateError(t('Please enter title'));
    }
  }, [onAddTodo, onSuccess, parent, t, title, todos, user]);
  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter') {
        onClick();
      }
    },
    [onClick],
  );

  if (isLoading) {
    return (
      <VStack className={classNames(cls.form, {}, [className])}>
        <Loader />
      </VStack>
    );
  }
  return (
    <VStack
      role="form"
      gap="8"
      align="stretch"
      className={classNames(cls.form, {}, [className])}
    >
      <Text title={t('New todo')} />
      <Input
        data-testid="title"
        id="titleInput"
        value={title}
        onChange={setTitle}
        onKeyDown={onKeyDown}
        placeholder={t('Todo Title')}
      />
      <Listbox
        defaultValue={t('Choose Parent')}
        className={cls.listbox}
        value={parent}
        onChange={setParent}
        maxHeight={300}
        items={listboxItems}
      />
      {validateError && <Text theme={TextTheme.ERROR} text={validateError} />}
      {error && (
        <Text theme={TextTheme.ERROR} text={t('Adding new todo error')} />
      )}
      <Button id="submitAddBtn" onClick={onClick}>
        {t('Add Todo Btn')}
      </Button>
    </VStack>
  );
});
export default AddTodoForm;
