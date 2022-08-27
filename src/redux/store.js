import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { contactReducer } from './contactSlice';

import { contactApi } from './contactsQuery/contactAPI';
import { authApi } from './UserSrote';

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    [contactApi.reducerPath]: contactApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactApi.middleware,
  ],
});

setupListeners(store.dispatch);
