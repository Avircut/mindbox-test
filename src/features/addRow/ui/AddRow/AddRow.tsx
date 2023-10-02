import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AddRow.module.scss';
import { memo } from 'react';

interface AddRowProps {
    className?: string;
}

export const AddRow = memo((props: AddRowProps) => {
    const { className } = props;
    
    return (
        <div className={classNames(cls.AddRow, {}, [className])}>
           
        </div>
    );
});