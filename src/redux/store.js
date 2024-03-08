import { configureStore } from '@reduxjs/toolkit'
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { toDoReducer } from './../redux/toDoSlice'
import persistReducer from 'redux-persist/es/persistReducer'

const persistConfig = {
  'key': 'root',
  storage,
  'whitelist': ['toDo'],
}

const toDoPersistReducer = persistReducer(persistConfig, toDoReducer)

export const store = configureStore({
  'reducer': toDoPersistReducer,
  'middleware': (getDefaultMiddleware) =>
    getDefaultMiddleware({
      'serializableCheck': {
        'ignoredActions': [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)
