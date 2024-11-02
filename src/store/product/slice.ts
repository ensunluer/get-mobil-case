import { createSlice } from '@reduxjs/toolkit'
import { state } from './states.ts';
import caseReducers from './reducer.ts';

const Product = createSlice({
  name: 'product',
  initialState: state,
  reducers: {},
  extraReducers: builder => caseReducers(builder)
})

export default Product
