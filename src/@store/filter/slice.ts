import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterListType, FilterType } from '../../@types';

const initialState: FilterListType = {
  data: [
    { name: 'GOLD', active: false },
    { name: 'SILVER', active: true },
    { name: 'WOOD', active: true },
    { name: 'STANDART', active: false },
  ],
};

export const slice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilterAC: (state, action: PayloadAction<FilterType>) => {
      return {
        data: state.data.map((filter) => {
          if (filter.name === action.payload) {
            return { ...filter, active: !filter.active };
          }
          return filter;
        }),
      };
    },
  },
});

export const filterReducer = slice.reducer;
export const { setFilterAC } = slice.actions;
