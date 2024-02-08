import { configureStore } from '@reduxjs/toolkit';
import budgetReducer from './reducers/budgetReducer';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getDefaultMiddleware } from '@reduxjs/toolkit';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, budgetReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware:(getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);

export { store, persistor };
