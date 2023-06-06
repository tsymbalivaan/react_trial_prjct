import { FC } from 'react';
import { Box } from '@mui/material';

// Styles
import { AuthHeader, AuthHeaderFinance } from './styles';

const Header: FC = () => {
	return (
		<Box sx={AuthHeader}>
			<Box component="span">InCode</Box>
			<Box component="span" sx={AuthHeaderFinance}>
				Finance
			</Box>
		</Box>
	);
};
export default Header;
