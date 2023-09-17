import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
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

const AddTodoForm = memo((props: AddTodoFormProps) => {
  const { className, onSuccess } = props;
  const { t } = useTranslation();
  const [title, setTitle] = useState('');
  const [parent, setParent] = useState('');
  const user = useAppSelector(getUserAuthData);
  const [onAddTodo, { isLoading, error }] = useAddNewTodo();
  const { data: todos } = useFetchUserTodos(user!.id);
  const [validateError, setValidateError] = useState('');
  const listboxItems: ListboxItem[] = todos?.length
    ? todos.map((todo) => ({
      content: todo.title,
      value: todo.id ?? '',
    }))
    : [{ content: t('No todos yet'), value: '-1', disabled: true }];
  const onClick = useCallback(
    (e: React.MouseEvent) => {
      if (title !== '') {
        setValidateError('');
        const parentId = todos?.find((item) => item.title === parent)?.id;
        const todo: Todo = {
          userId: user!.id,
          isCompleted: false,
          title,
          todoId: parentId,
        };
        onAddTodo?.(todo);
        onSuccess?.();
      } else {
        setValidateError(t('Please enter title'));
      }
    },
    [onAddTodo, onSuccess, parent, t, title, todos, user],
  );
  if (isLoading) {
    return (
      <VStack className={classNames(cls.form, {}, [className])}>
        <Loader />
      </VStack>
    );
  }
  return (
    <VStack role="form" gap="8" align="stretch" className={classNames(cls.form, {}, [className])}>
      <Text title={t('New todo')} />
      <Input value={title} onChange={setTitle} placeholder={t('Todo Title')} />
      <Listbox
        defaultValue={t('Choose Parent')}
        className={cls.listbox}
        value={parent}
        onChange={setParent}
        maxHeight={300}
        items={listboxItems}
      />
      {validateError && <Text theme={TextTheme.ERROR} text={validateError} />}
      {error && <Text theme={TextTheme.ERROR} text={t('Adding new todo error')} />}
      <Button onClick={onClick}>
        {t('Add Todo Btn')}
      </Button>
    </VStack>
  );
});
export default AddTodoForm;
