import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { UsersAPI } from '../../@api/users';
import { ClientsItemType } from '../../@types/Clients';
import { waitForMe } from '../../@utils/waitforme';
// import { clientsMock } from './mockclients';

const clientsInitialState = {
  // data: clientsMock,
  data: [] as ClientsItemType[],
  isLoading: false,
};

export type ClientsInitialState = typeof clientsInitialState;

export const fetchUsersTC = createAsyncThunk<any, void, { state: any }>(
  'users/fetchUsers',
  async (_, thunkAPI) => {
    // const { currentPage, pageSize, filter, currentRequestId, loading } =
    //   thunkAPI.getState().users;
    try {
      // TODO:
      // if (loading !== 'pending' || thunkAPI.requestId !== currentRequestId) {
      //   return null;
      // }
      // await waitForMe(1000);
      // const res = await UsersAPI.getUsers(currentPage, pageSize, filter);
      const res = await UsersAPI.getUsers();
      return res;
    } catch (err: any) {
      // Use `err.response.data` as `action.payload` for a `rejected` action,
      // by explicitly returning it using the `rejectWithValue()` utility
      return thunkAPI.rejectWithValue(err.response.data);
    }
  },
);

export const updateSpentSumTC = createAsyncThunk<any, any, { state: any }>(
  'clients/updateSpentSum',
  async (params, thunkAPI) => {
    try {
      const res = await UsersAPI.updateSpentSum(params.userId, params.spentSum);
      return res;
    } catch (err: any) {
      // Use `err.response.data` as `action.payload` for a `rejected` action,
      // by explicitly returning it using the `rejectWithValue()` utility
      return thunkAPI.rejectWithValue(err.response.data);
    } finally {
      // refetch
      thunkAPI.dispatch(fetchUsersTC());
    }
  },
);

export const clientsSlice = createSlice({
  name: 'clients',
  initialState: clientsInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsersTC.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUsersTC.fulfilled, (state, action) => {
      state.isLoading = false;
      if (action.payload) {
        state.data = action.payload;
      }
    });
    // builder.addCase(fetchUsersTC.rejected, (state, action) => {
    //   const { requestId } = action.meta;
    //   if (state.loading === 'pending' && state.currentRequestId === requestId) {
    //     state.loading = 'idle';
    //     state.error = action.error;
    //     state.currentRequestId = undefined;
    //   }
    // });
  },
});

export const clientsReducer = clientsSlice.reducer;
// export const { setFilterAC } = slice.actions;
