import { ActionReducerMapBuilder } from '@reduxjs/toolkit';

import { getDetail, getList } from './method.ts';
import { State } from './states.ts';

export const _getList = (builder: ActionReducerMapBuilder<State>) => {
  return builder
    .addCase(getList.pending, state => {
      state.list.loading = true;
    })
    .addCase(getList.fulfilled, (state, action) => {
      state.list.data = action.payload.data.products;
      state.list.loading = false;
    })
    .addCase(getList.rejected, (state, action) => {
      state.list.error = action.payload;
      state.list.loading = false;
    });
};

export const _getDetails = (builder: ActionReducerMapBuilder<State>) => {
  return builder
    .addCase(getDetail.pending, state => {
      state.detail.loading = true;
    })
    .addCase(getDetail.fulfilled, (state, action) => {
      state.detail.data = action.payload.data;
      state.detail.loading = false;
    })
    .addCase(getDetail.rejected, (state, action) => {
      state.detail.error = action.payload;
      state.detail.loading = false;
    });
};

export const caseReducers = (builder: ActionReducerMapBuilder<State>) => {
  builder = _getList(builder)
  builder = _getDetails(builder)
  return builder;
};

export default caseReducers;
