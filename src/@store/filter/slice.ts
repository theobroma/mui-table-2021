import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterType } from '../../@types';

export const slice = createSlice({
  name: 'filter',
  initialState: 'SHOW_ALL' as FilterType,
  reducers: {
    setFilterAC: (state, action: PayloadAction<FilterType>) => action.payload,
  },
});

export const filterReducer = slice.reducer;
export const { setFilterAC } = slice.actions;
