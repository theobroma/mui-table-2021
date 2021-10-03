import { configureStore } from '@reduxjs/toolkit';
// import { createBrowserHistory } from 'history';
import { createLogger } from 'redux-logger';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { rootReducer } from './@store/index';

// export const history = createBrowserHistory();

const persistConfig = {
  key: 'root',
  storage,
  // blacklist: ['router'], // will not be persisted
  whitelist: ['filter'], // persist just this
};

const logger = createLogger({
  collapsed: true,
});

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
  // devTools: process.env.NODE_ENV === 'development',
  devTools: true,
});

export const persistor = persistStore(store);
export default { store, persistor };
