import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { clientsMock } from './mockclients';

const initialState = {
  data: clientsMock,
};

export const slice = createSlice({
  name: 'clients',
  initialState,
  reducers: {
    // setFilterAC: (state, action: PayloadAction<FilterType>) => {
    //   return {
    //     data: state.data.map((filter) => {
    //       if (filter.name === action.payload) {
    //         return { ...filter, active: !filter.active };
    //       }
    //       return filter;
    //     }),
    //   };
    // },
  },
});

export const clientsReducer = slice.reducer;
// export const { setFilterAC } = slice.actions;
