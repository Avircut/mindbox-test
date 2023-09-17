import { classNames } from 'shared/lib/classNames/classNames';
import { Suspense, memo } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import { Loader } from 'shared/ui/Loader/Loader';
import AddTodoForm from '../AddTodoForm/AddTodoForm';

interface AddTodoFormModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const AddTodoFormModal = memo((props : AddTodoFormModalProps) => {
  const { className, isOpen, onClose } = props;
  return (
    <Modal lazy isOpen={isOpen} onClose={onClose} className={classNames('', {}, [className])}>
      <Suspense fallback={<Loader />}>
        <AddTodoForm />
      </Suspense>
    </Modal>
  );
});
