import { createSlice } from '@reduxjs/toolkit';

// Types
import { User } from 'core/types/user.type';

// Actions
import { logIn, sigUp } from 'store/reducers/auth/actions';

// Operations
import { signInOperation, updateAuthStatusOperation } from 'store/reducers/auth/operations';

export interface IinitialState {
	user: User | null;
	isAuth: boolean;
}

const initialState: IinitialState = {
	user: null,
	isAuth: false,
};
const authReducer = createSlice({
	name: 'Auth',
	initialState,
	reducers: {
		updateAuthStatus: updateAuthStatusOperation,
	},
	extraReducers: builder => {
		builder.addCase(sigUp.fulfilled, signInOperation);
		builder.addCase(logIn.fulfilled, signInOperation);
	},
});

export default authReducer.reducer;
export const { updateAuthStatus } = authReducer.actions;
