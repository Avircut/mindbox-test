import { rtkApi } from 'shared/api/rtkApi';
import { Outlay } from '../types/OutlaySchema';

const outlayApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    FetchList: build.query<Outlay[], void>({
      query: () => ({
        url: '/list',
      }),
      providesTags: () => ['Outlay'],
    }),
    AddRow: build.mutation<Outlay, Outlay>({
      query: (outlay) => ({
        url: '/create',
        method: 'POST',
        body: outlay,
      }),
      invalidatesTags: () => ['Outlay'],
    }),
    UpdateRow: build.mutation<Outlay, Outlay>({
      query: (outlay) => ({
        url: `/${outlay.id}/update`,
        method: 'PUT',
        body: outlay,
      }),
      async onQueryStarted(patch, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          outlayApi.util.updateQueryData('FetchList', undefined, (draft) => {
            const index = draft.findIndex((item) => item.id === patch.id);
            if (index !== -1) draft.splice(index, 1);
          }),
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
      invalidatesTags: () => ['Outlay'],
    }),
    RemoveRow: build.mutation<Outlay, Outlay>({
      query: (outlay) => ({
        url: `/${outlay.id}/delete`,
        method: 'DELETE',
      }),
      async onQueryStarted(patch, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          outlayApi.util.updateQueryData('FetchList', undefined, (draft) => {
            const index = draft.findIndex((item) => item.id === patch.id);
            if (index !== -1) draft[index] = { ...patch };
          }),
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
      invalidatesTags: () => ['Outlay'],
    }),
  }),
});
export const useFetchList = outlayApi.useFetchListQuery;
export const useAddRow = outlayApi.useAddRowMutation;
export const useUpdateRow = outlayApi.useUpdateRowMutation;
export const useRemoveRow = outlayApi.useRemoveRowMutation;
