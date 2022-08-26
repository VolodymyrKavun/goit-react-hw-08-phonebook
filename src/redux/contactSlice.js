import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  filterInput: '',
};

export const filterSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    filterItems(state, action) {
      state.filterInput = action.payload;
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

export const contactReducer = persistReducer(
  persistConfig,
  filterSlice.reducer
);

export const { filterItems } = filterSlice.actions;
