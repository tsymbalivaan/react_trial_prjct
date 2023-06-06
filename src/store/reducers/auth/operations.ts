import { PayloadAction } from '@reduxjs/toolkit';
import { User } from 'core/types/user.type';
import { IinitialState } from 'store/reducers/auth/reducer';

export const signInOperation = (state: IinitialState, { payload }: PayloadAction<User>) => {
	state.user = payload;
};

export const updateAuthStatusOperation = (state: IinitialState) => {
	state.user = null;
};
