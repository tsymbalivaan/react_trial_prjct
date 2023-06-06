import { StoreType } from 'store';

export const selectorGetUser = (store: StoreType): any => {
	return store.authReducer.user;
};
