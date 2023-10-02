import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Outlay } from 'entities/Outlay';
import { AddRowSchema } from '../types/addRowSchema';

const initialState: AddRowSchema = {
  data: {
    title: '',
    salary: 0,
    equipmentCosts: 0,
    overheads: 0,
    estimatedProfit: 0,
  },
};

export const addRowSlice = createSlice({
  name: 'addRow',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<Outlay>) => {
      state.data = action.payload;
    },
  },
});

export const { actions: addRowActions } = addRowSlice;
export const { reducer: addRowReducer } = addRowSlice;
