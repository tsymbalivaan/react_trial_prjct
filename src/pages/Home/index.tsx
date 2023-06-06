import { Box, Typography } from '@mui/material';
import { AppDispatch } from 'hooks/types';

// Styles
import {
	CongratsBox,
	HomeWrapper,
	CongratsTitle,
	CongratsImage,
	CongratsDescription,
	ButtonLogout,
} from 'pages/Home/styles';

// Images
import CongratImg from 'assets/decor.svg';
import People from 'assets/people.svg';

// Actions
import { updateAuthStatus } from 'store/reducers/auth/reducer';

// Components
import Header from 'shared/components/Header';
import ButtonComponent from 'shared/components/Button';

const Home = () => {
	const dispatch = AppDispatch();

	const handleLogOut = () => {
		dispatch(updateAuthStatus());
	};
	return (
		<Box sx={HomeWrapper}>
			<Header />
			<Box sx={CongratsBox}>
				<Box component="img" src={CongratImg} alt="congrats" sx={CongratsImage} />

				<Typography sx={CongratsTitle}>Congratulations</Typography>
				<Typography sx={CongratsDescription}>
					Now you are on the main page. Soon we will provide you with detailed feedback on the result of your
					work
				</Typography>
				<ButtonComponent text="Logout" styles={ButtonLogout} onClickButton={handleLogOut} />
				<Box component="img" src={People} alt="people" />
			</Box>
		</Box>
	);
};
export default Home;
