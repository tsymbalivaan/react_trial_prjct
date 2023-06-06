import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/auth/reducer';

const store = configureStore({
	reducer: { authReducer },
	middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }),
});

export type StoreType = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;

export default store;
