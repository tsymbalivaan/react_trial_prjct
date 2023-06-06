import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'core/axios';

export const sigUp = createAsyncThunk('auth/register', async (user: any) => {
	const { data } = await axios.post('/auth/register', user);
	return data;
});

export const logIn = createAsyncThunk('auth/login', async (user: any) => {
	const { data } = await axios.post('/auth/login', user);
	return data;
});
