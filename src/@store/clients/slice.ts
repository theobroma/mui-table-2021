import { createSlice } from '@reduxjs/toolkit';
import { clientsMock } from './mockclients';

const initialState = {
  data: clientsMock,
};

export const slice = createSlice({
  name: 'clients',
  initialState,
  reducers: {},
});

export const clientsReducer = slice.reducer;
// export const { setFilterAC } = slice.actions;
