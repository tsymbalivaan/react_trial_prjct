import { FC } from 'react';
import { Button } from '@mui/material';

// Styles
import { ButtonComponentStyles } from './styles';

interface Styles {
	[key: string]: string | number;
}

interface ButtonComponentProps {
	isDisabled?: boolean;
	text: string;
	styles?: Styles;
	onClickButton?: () => void;
}
const ButtonComponent: FC<ButtonComponentProps> = ({ isDisabled = false, text, styles, onClickButton }) => {
	return (
		<Button
			onClick={() => onClickButton?.()}
			type="submit"
			variant="contained"
			disabled={isDisabled}
			sx={{ ...ButtonComponentStyles, ...styles }}
		>
			{text}
		</Button>
	);
};
export default ButtonComponent;
