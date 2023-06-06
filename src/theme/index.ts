import createTheme from '@mui/material/styles/createTheme';

export const Theme = createTheme({
	components: {
		MuiButtonBase: {
			styleOverrides: {
				root: {
					background: '#539713 !important',
				},
			},
		},
	},
});
