import { useFetchUserTodos } from 'entities/Todo';
import { TodoList } from 'entities/Todo/ui/TodoList/TodoList';
import { getUserAuthData } from 'entities/User';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector/useAppSelector';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { VStack } from 'shared/ui/Stack';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { Page } from 'widgets/Page/Page';
import { Button } from 'shared/ui/Button/Button';
import { TodoHeader } from '../TodoHeader/TodoHeader';
import cls from './MainPage.module.scss';
import { AddTodoFormModal } from '../AddTodoFormModal/AddTodoFormModal';
// TODO: move excess code to child proxy components
const MainPage = memo(() => {
  const { t } = useTranslation();
  const user = useAppSelector(getUserAuthData);
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  const { data: todos, isLoading, error } = useFetchUserTodos(user!.id, { refetchOnMountOrArgChange: true });
  const onCloseModal = useCallback(() => {
    setIsAddModalVisible(false);
  }, []);
  const onShowModal = useCallback(() => {
    setIsAddModalVisible(true);
  }, []);
  if (isLoading) {
    return (
      <Page className={cls.Page}>
        <VStack align="center">
          <TodoHeader />
          <VStack max className={cls.wrapper}>
            <VStack max align="stretch">
              <Skeleton width="100%" height={50} />
              <Skeleton width="100%" height={50} />
              <Skeleton width="100%" height={50} />
              <Skeleton width="100%" height={50} />
              <Skeleton width="100%" height={50} />
              <Skeleton width="100%" height={50} />
              <Skeleton width="100%" height={50} />
            </VStack>
          </VStack>
        </VStack>
      </Page>
    );
  }
  if (error) {
    return (
      <Page className={cls.Page}>
        <Text theme={TextTheme.ERROR} text={t('Loading error')} />
      </Page>
    );
  }
  if (!todos) return null;
  return (
    <Page className={cls.Page}>
      <VStack align="center">
        <TodoHeader />
        <VStack align="stretch" className={cls.wrapper}>
          <TodoList todos={todos?.filter((todo) => !todo.todoId)} />
          <Button onClick={onShowModal}>{t('Add Todo Btn')}</Button>
        </VStack>
        {isAddModalVisible && <AddTodoFormModal isOpen onClose={onCloseModal} />}
      </VStack>
    </Page>
  );
});
export default MainPage;
