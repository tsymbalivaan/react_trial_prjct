import { PayloadAction } from '@reduxjs/toolkit';
import { IinitialState } from 'store/reducers/auth/reducer';

export const signInOperation = (state: IinitialState, { payload }: PayloadAction<any>) => {
	state.user = payload;
};

export const updateAuthStatusOperation = (state: IinitialState) => {
	state.user = null;
};
