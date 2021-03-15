import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
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

const logger = createLogger({
  collapsed: true,
});

const persistConfig = {
  key: 'root',
  storage,
  // blacklist: ['filter'], // will not be persisted
  // whitelist: ['filter'], // will be persisted
};

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// const middleware = [...getDefaultMiddleware(), logger];
// https://github.com/rt2zz/redux-persist/issues/988#issuecomment-552242978
const middleware = [
  ...getDefaultMiddleware({
    // immutableCheck: true,
    thunk: true,
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

export const store = configureStore({
  reducer: persistedReducer,
  middleware,
  // devTools: process.env.NODE_ENV === 'development',
  devTools: true,
});

export const persistor = persistStore(store);
export default { store, persistor };
