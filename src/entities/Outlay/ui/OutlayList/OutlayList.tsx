import { FC } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Outlay } from '../../model/types/OutlaySchema';
import cls from './OutlayList.module.scss';

interface OutlayListProps {
  items?: Outlay[]
}

const columns: GridColDef[] = [
  { field: 'parentId', headerName: 'Уровень', width: 110 },
  { field: 'title', headerName: 'Наименование работ', width: 757 },
  { field: 'salary', headerName: 'Основная з/п' },
  { field: 'equipmentCosts', headerName: 'Оборудование', width: 200 },
  { field: 'overheads', headerName: 'Накладные расходы', width: 200 },
  { field: 'estimatedProfit', headerName: 'Сметная прибыль', width: 200 },
];

export const OutlayList: FC<OutlayListProps> = ({ items }) => {
  if (!items) return null;
  return (
    <DataGrid className={cls.List} rows={items} columns={columns} />
  );
};
