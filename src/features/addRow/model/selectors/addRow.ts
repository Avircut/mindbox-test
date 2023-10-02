import { StateSchema } from 'app/providers/StoreProvider';

export const getData = (state:StateSchema) => state.addRow?.data;
export const getIsLoading = (state:StateSchema) => state.addRow?.isLoading;
export const getError = (state:StateSchema) => state.addRow?.error;
